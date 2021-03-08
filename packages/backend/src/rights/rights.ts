import { MeshContext } from '@internalTypes/context';
import { MutationConfig } from './config';

/**
 * When you look into mesh.ts you see that we're using a ResolversCompositionTransform to
 * allow/deny mutations based on a user rights. This is configured via resolvers specifying
 * the name of a mutation (e.g. "Mutation.mutationPartner") or multiple mutations (like "Mutation.*")
 * and composers for these resolvers.
 *
 * A composer then decides based on what rights are required for _one_ mutation to change it and
 * the rights of the user wanting to execute that mutation if the user has the right to do so.
 *
 * This method transforms a MutationConfig object which stores per mutation the user right required to execute it
 * into a list of resolver-composer pairs that we can pass to the ResolversCompositionTransform in mesh.ts.
 *
 * @param mutationConfig An object storing the relation between a mutation and the right required to execute it.
 */
export const buildMutationResolverComposers = (
  mutationConfig: MutationConfig
): {
  resolver: string;
  composer: (
    next: any
  ) => (
    root: any,
    args: any,
    context: {
      req: MeshContext;
    },
    info: any
  ) => any;
}[] => [
  /*
   * First resolver in the list has lowest precedence.
   * So we put one there that catches every mutation where we don't have a dedicated
   * resolver for and disallow it.
   */
  {
    resolver: 'Mutation.*', // will catch any mutation that is not specified in mutationConfig
    composer: blockingComposer,
  },
  {
    resolver: 'Mutation.logDB', // logDB is a special mutation that does not require any user rights
    composer: neverBlockingComposer,
  },
  ...Object.keys(mutationConfig).map((mutationName) => ({
    resolver: `Mutation.${mutationName}`,
    composer: buildComposer(mutationConfig, mutationName),
  })),
];

/**
 * A composer that is used to always disallow/block a mutation.
 */
export const blockingComposer = (next: any) => (
  root: any,
  args: any,
  context: MeshContext,
  info: any
): void => {
  throw new Error(
    `No resolver composer has been defined in the mutation rights configuration for this mutation: ${info.fieldName}`
  );
};

/**
 * A composer that is used to always allow a mutation.
 */
export const neverBlockingComposer = (next: any) => (
  root: any,
  args: any,
  context: MeshContext,
  info: any
): void => {
  return next(root, args, context, info);
};

/**
 * Builds a composer for one specific mutation.
 * @param mutationName
 *  Name of the mutation to build a composer for
 * @param mutationConfig
 *  Config that holds the respective user right required to execute the mutation with name mutationName
 */
export const buildComposer = (
  mutationConfig: MutationConfig,
  mutationName: string
) => (next: any) => (
  root: any,
  args: any,
  context: MeshContext,
  info: any
): void => {
  const requiredRightForMutation = mutationConfig[mutationName];

  if (!requiredRightForMutation) {
    throw new Error(
      `No user right defined for mutation "${mutationName}"!`
    );
  } else if (
    !context.res.locals.rights.has(requiredRightForMutation)
  ) {
    throw new Error(
      `You don't have the necessary rights to execute mutation "${mutationName}"!`
    );
  } else {
    return next(root, args, context, info);
  }
};
