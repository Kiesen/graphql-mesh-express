import { MeshContext } from '@src/types/context';
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
import { ChangedField } from '@src/mesh/types/generated';

// TODO: Adjust table banes
const CHANGELOG_DEV_TABLE = {
  TABLE_NAME: 'CHANGELOG_DEV_TABLE',
};
const CHANGELOG_LIVE_TABLE = {
  TABLE_NAME: 'CHANGELOG_LIVE_TABLE',
};

// TODO: Adjust the function
const insertChangelogs = (...params: any[]): any => void 0;

/**
 * Returns true if the change specified in `field` is reflected in `result`.
 * E.g. field says property A should have value 123 but result.A is 456
 * then the change would not be successful.
 */
export const isSuccessfulChange = (
  result: unknown,
  field: ChangedField
): boolean =>
  get(result, `data.${field.path}`) ===
  JSON.parse(field.newValueJson);

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
  groupBy: (result: unknown, field: ChangedField) => boolean
) => (
  result: unknown,
  fields: LogData['fields']
): [LogData['fields'], LogData['fields']] =>
  partition(fields, (field) => groupBy(result, field));

export const mapToChangelogDBRows = (
  comment: string,
  advertiserId: number,
  memberUuid: string,
  fields: LogData['fields']
): ChangelogDBRows =>
  fields.map((field) => ({
    memberUuid,
    advertiserId,
    fieldNamespace: field.fieldNamespace,
    fieldId: field.fieldId,
    fieldName: field.fieldName,
    oldValueRaw: field.oldValueJson,
    oldValue: field.oldValueAsDisplayed,
    newValueRaw: field.newValueJson,
    newValue: field.newValueAsDisplayed,
    comment,
  }));

export const mapToFailedChangeReports = (
  fields: LogData['fields']
): FailedChangeReports =>
  fields.map((field) => ({
    fieldName: field.fieldName,
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
      const tableName =
        logData.environment === 'live'
          ? CHANGELOG_LIVE_TABLE.TABLE_NAME
          : CHANGELOG_DEV_TABLE.TABLE_NAME;

      const changelogs = mapToChangelogDBRows(
        logData.comment,
        logData.advertiserId,
        (context as MeshContext).res.locals.memberUuid,
        successfulChanges
      );
      insertChangelogs(changelogs, tableName);
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
