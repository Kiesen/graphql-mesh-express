import { userRightsResolver } from '@src/mesh/additionalResolvers/queryResolvers/userRights';
import { managerResolver } from '@src/mesh/additionalResolvers/typeResolvers/manager';
//import { logDBResolver } from '@src/mesh/additionalResolvers/mutationResolvers/logDBResolver';
// import { Environment } from '@src/graphql/types/generated';

export const additionalResolversWithoutEnvMapping = {
  Manager: managerResolver,
};

/**
 * Creates a map with a environment related mapping
 * of environment related resolvers.
 */
export const createEnvRelatedResolverMapping = (
  envs: any[],
  resolverMap: Record<string, unknown>
): Record<string, typeof resolverMap> =>
  Object.keys(resolverMap).reduce((acc, curr) => {
    for (const env of envs) {
      acc = {
        ...acc,
        [`${env}_${curr}`]: resolverMap[curr],
      };
    }
    return acc;
  }, {});

/**
 *  If you would like to update types use
 * `// @ts-nocheck` on top of the file
 * to ignore failing types and build a working schema
 * out of which we can generate the new types
 * by running the command `yarn run graphql:generate:types`
 */
const additionalResolvers = {
  // Mutation: {
  //   logDB: logDBResolver,
  // },
  Query: {
    userRights: userRightsResolver,
  },
  ...createEnvRelatedResolverMapping(
    Object.values({ dev: 'dev', live: 'live' }),
    additionalResolversWithoutEnvMapping
  ),
};

export { additionalResolvers };
