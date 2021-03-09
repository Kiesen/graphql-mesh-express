import { getMesh, GetMeshOptions } from '@graphql-mesh/runtime';
import { GraphQLSchema } from 'graphql';
import GraphQLHandler from '@graphql-mesh/graphql';
// import MySQLHandler from '@graphql-mesh/mysql';
import { MeshPubSub } from '@graphql-mesh/types';
import { PubSub } from 'graphql-subscriptions';
import LRUCache from '@graphql-mesh/cache-inmemory-lru';
import StitchingMerger from '@graphql-mesh/merger-stitching';
import FilterTransform from '@graphql-mesh/transform-filter-schema';
import CacheTransform from '@graphql-mesh/transform-cache';
import { additionalResolvers } from '@src/mesh/additionalResolvers/additionalResolvers';
import { additionalTypeDefs } from '@src/mesh/additionalTypeDefs';
import ResolversCompositionTransform from '@graphql-mesh/transform-resolvers-composition';
import { Endpoints } from '@src/config/Endpoints';
import { customFetch } from '@src/mesh/customFetch/Fetch';
import { buildMutationResolverComposers } from '@src/rights/rights';
import { mutationConfig } from '@src/rights/config';
// import PrefixTransform from '@graphql-mesh/transform-prefix';
import { UnwrapPromise } from '@internalTypes/UnwrapPromise';

/**
 * These mutations are going to be used also in relation to our
 * `logDB` mutation.
 */
const mutationFieldsForSettingsChanges: readonly string[] = [
  'updateFirstName',
];
const allowedMutations: readonly string[] = [
  ...mutationFieldsForSettingsChanges,
  'logDB',
];

const allowedQueries: readonly string[] = ['user'];

export const buildMeshConfigOptions = (): GetMeshOptions => {
  const cache = new LRUCache();
  /**
   * We do not use the GraphQL Subscriptions but it
   * is required from the types to create an instance of pubsub
   */
  const pubsub = new PubSub() as MeshPubSub;
  return {
    pubsub,
    cache,
    merger: StitchingMerger,
    sources: [
      {
        name: 'GraphQLZero_dev',
        handler: new GraphQLHandler({
          pubsub,
          cache,
          name: 'GraphQLZero_dev',
          config: {
            endpoint: Endpoints.FAKE_GRAPHQL_DEV,
            customFetch,
          },
        }),
        // TODO:
        // transforms: [
        //   new PrefixTransform({
        //     pubsub,
        //     cache,
        //     config: {
        //       // TODO: Use environment
        //       // value: Environment.Live + '_',
        //       value: '_',
        //       includeRootOperations: true,
        //     },
        //   }),
        // ],
      },
      // {
      //   name: 'GraphQLZero_prod',
      //   handler: new GraphQLHandler({
      //     pubsub,
      //     cache,
      //     name: 'GraphQLZero_prod',
      //     config: {
      //       endpoint: Endpoints.FAKE_GRAPHQL_PROD,
      //       customFetch,
      //     },
      //   }),
      // },
      // {
      //   name: 'ChangelogDB',
      //   handler: new MySQLHandler({
      //     cache,
      //     pubsub,
      //     name: 'ChangelogDB',
      //     config: {
      //       // TODO: Add a pool via mysql package
      //       // pool: DatabasePools.CHANGELOG_DB.getPool(),
      //     },
      //   }),
      // },
    ],
    additionalResolvers,
    additionalTypeDefs: [additionalTypeDefs], // Needs to be wrapped in an array
    transforms: [
      new CacheTransform({
        cache,
        pubsub,
        config: [
          {
            field: 'Query.user',
            cacheKey: 'user',
            invalidate: {
              ttl: 1 * 60, // invalidate every 1 minute
            },
          },
        ],
      }),
      new FilterTransform({
        cache,
        pubsub,
        config: [
          `Mutation.{${allowedMutations.join(', ')}}`,
          `Query.{${allowedQueries.join(', ')}}`,
        ],
      }),
      new ResolversCompositionTransform({
        cache,
        pubsub,
        config: [
          //  Resolvers which are placed below have higher precedence.
          ...buildMutationResolverComposers(mutationConfig),
        ],
      }),
    ],
  };
};

export const getMeshConfig = async (): Promise<{
  schema: GraphQLSchema;
  contextBuilder: UnwrapPromise<
    ReturnType<typeof getMesh>
  >['contextBuilder'];
  cache: UnwrapPromise<ReturnType<typeof getMesh>>['cache'];
  mutationFieldsForSettingsChanges: readonly string[];
}> => {
  const { schema, contextBuilder, cache } = await getMesh(
    buildMeshConfigOptions()
  );

  return {
    schema,
    contextBuilder,
    cache,
    mutationFieldsForSettingsChanges,
  };
};
