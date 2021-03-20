import {
  GraphQLError,
  ValidationContext,
  ASTVisitor,
  SelectionNode,
  FragmentSpreadNode,
  FieldNode,
} from 'graphql';
import intersection from 'lodash/intersection';

const LOG_DB_FIELD_MUTATION_NAME = 'logDB';

/**
 * If there is a mutation and there is at least one field name which is a
 * mutation settings field and there is no corresponding `logDB` mutation
 * then we throw an error and the mutation is aborted automatically
 *
 * Helpful resources:
 * - https://github.com/graphql/express-graphql#additional-validation-rules
 * - https://graphql-code-generator.com/docs/custom-codegen/using-visitor
 * - https://astexplorer.net/
 */
export const logDBMutationValidation = (
  mutationFieldsForSettingsChanges: readonly string[]
) => (context: ValidationContext): ASTVisitor => {
  return {
    OperationDefinition(node): void {
      // Executed for every mutation
      if (node.operation === 'mutation') {
        const selectionNames: string[] = [];

        // Collecting all mutation field names
        for (const selection of node.selectionSet.selections) {
          if (isSelectionNodeContainingName(selection)) {
            selectionNames.push(selection.name.value);
          }
        }

        validateRequiredLogDBField(
          mutationFieldsForSettingsChanges,
          selectionNames,
          context
        );
      }
    },
  };
};

export const validateRequiredLogDBField = (
  mutationFieldsForSettingsChanges: readonly string[],
  selectionNames: readonly string[],
  context: ValidationContext
): void => {
  const selectionNamesWhichRequireLogDB = intersection(
    selectionNames,
    mutationFieldsForSettingsChanges
  );

  if (
    selectionNamesWhichRequireLogDB.length > 0 &&
    !selectionNames.includes(LOG_DB_FIELD_MUTATION_NAME)
  ) {
    context.reportError(
      new GraphQLError(
        `Validation: Cannot perform mutation without a corresponding logDB input for the following fields "${selectionNamesWhichRequireLogDB.join(
          ', '
        )}"`
      )
    );
  }
};

/**
 * A selectionNode in GraphQL can be one of: FieldNode | FragmentSpreadNode | InlineFragmentNode
 * The `InlineFragmentNode`s do not have a name, so we should check whether we have this case
 * to be on the safe side while traversing the AST
 */
export const isSelectionNodeContainingName = (
  selectionNode: SelectionNode
): selectionNode is FieldNode | FragmentSpreadNode =>
  (selectionNode as FieldNode).name !== undefined;
