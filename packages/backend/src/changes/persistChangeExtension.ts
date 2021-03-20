import {
  DocumentNode,
  OperationDefinitionNode,
  OperationTypeNode,
} from 'graphql';
import get from 'lodash/get';
import partition from 'lodash/partition';
import {
  ChangelogDBRows,
  FailedChangeReports,
  LogData,
} from '../types/changes';
import { RequestInfo } from 'express-graphql';
import knex from '@db/connections/knex';
import { CHANGES_TABLE } from '@db/config/changes';
import { LogDbChangedField } from '@src/mesh/types/generated';

/**
 * Returns true if the change specified in `field` is reflected in `result`.
 * E.g. field says property A should have value 123 but result.A is 456
 * then the change would not be successful.
 */
export const isSuccessfulChange = (
  result: unknown,
  field: LogDbChangedField
): boolean =>
  get(result, `data.${field.path}`) === JSON.parse(field.newValue);

/* Partitions an array of ChangedField objects into two categories by
 * a using a predicate function `groupBy`. This results in an array
 * of two arrays. The first of these arrays contains the ChangedField
 * where the predicate function `groupBy` returned true.
 * The other array those ChangedField objects where it returned false.
 *
 * This function in combination with the isSuccessfulChange function
 * above is used to group changes into successful and failed ones.
 */
export const groupChanges = (
  groupBy: (result: unknown, field: LogDbChangedField) => boolean
) => (
  result: unknown,
  fields: LogData['fields']
): [LogData['fields'], LogData['fields']] =>
  partition(fields, (field) => groupBy(result, field));

export const mapToChangelogDBRows = (
  comment: string,
  memberUuid: string,
  fields: LogData['fields']
): ChangelogDBRows =>
  fields.map((field) => ({
    memberUuid,
    fieldId: field.fieldId,
    oldValue: field.oldValue,
    newValue: field.newValue,
    comment,
  }));

export const mapToFailedChangeReports = (
  fields: LogData['fields']
): FailedChangeReports =>
  fields.map((field) => ({
    fieldId: field.fieldId,
    path: field.path,
  }));

export const getOperationDefinitions = (
  document: DocumentNode | null | undefined
): OperationTypeNode[] =>
  get(document, 'definitions', [])
    .filter((definition) => definition.kind === 'OperationDefinition')
    .map(
      (definition) =>
        (definition as OperationDefinitionNode).operation
    );

export const hasOnlyQueryOperations = (
  operations: OperationTypeNode[]
): boolean =>
  operations.length > 0 &&
  operations.filter((operation) => operation === 'query').length ==
    operations.length;

export const hasSomeMutationOperations = (
  operations: OperationTypeNode[]
): boolean =>
  operations.filter((operation) => operation === 'mutation').length >
  0;

export const persistChangeExtension = ({
  document,
  result,
  context,
}: RequestInfo): { failedChanges?: FailedChangeReports } => {
  const logData: LogData | undefined = get(result, 'data.logDB');
  if (logData) {
    // If result contains 'logDB' we can check successful changes and log them
    const [successfulChanges, failedChanges] = groupChanges(
      isSuccessfulChange
    )(result, logData.fields);

    if (successfulChanges.length > 0) {
      // Depending on the environment set the corresponding table
      // TODO: Use another table for dev
      const tableName =
        logData.environment === 'live'
          ? CHANGES_TABLE.TABLE_NAME
          : CHANGES_TABLE.TABLE_NAME;

      const changelogs = mapToChangelogDBRows(
        logData.comment,
        // This is a fake user which is also inserted as special seed
        // inside the knex table config.
        '00000000-0000-0000-0000-000000000000',
        successfulChanges
      );

      for (const change of changelogs) {
        knex(tableName)
          .insert({
            user_uuid: change.memberUuid,
            date_of_change: new Date(),
            new_value: change.newValue,
            old_value: change.oldValue,
            comment: change.comment,
            field_id: change.fieldId,
          })
          .then((result) => {
            console.log(
              'Successfully inserted a change in the changelog db.',
              result
            );
          })
          .catch((e) => {
            console.error(
              'Failed to insert a change in the changelog db',
              e
            );
          });
      }
    }

    // any failed changes will be reported back to the frontend
    const failedChangesReports = mapToFailedChangeReports(
      failedChanges
    );
    return { failedChanges: failedChangesReports };
  } else {
    return {};
  }
};
