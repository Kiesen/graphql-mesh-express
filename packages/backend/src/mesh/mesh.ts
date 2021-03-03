import { getMesh, GetMeshOptions } from '@graphql-mesh/runtime';
import { GraphQLSchema } from 'graphql';
import GraphQLHandler from '@graphql-mesh/graphql';
import MySQLHandler from '@graphql-mesh/mysql';
import { MeshPubSub } from '@graphql-mesh/types';
import { PubSub } from 'graphql-subscriptions';
import LRUCache from '@graphql-mesh/cache-inmemory-lru';
import StitchingMerger from '@graphql-mesh/merger-stitching';
import FilterTransform from '@graphql-mesh/transform-filter-schema';
import CacheTransform from '@graphql-mesh/transform-cache';
import { additionalResolvers } from './additionalResolvers/additionalResolvers';
import { additionalTypeDefs } from './additionalTypeDefs';
import ResolversCompositionTransform from '@graphql-mesh/transform-resolvers-composition';
import { Endpoints } from '@src/config/Endpoints';
import { customFetch } from '@src/mesh/customFetch/Fetch';
import { buildMutationResolverComposers } from '@src/rights/rights';
import { mutationConfig } from '@src/rights/config';

/**
 * These mutations are going to be used also in relation to our
 * `logDB` mutation.
 */
const mutationFieldsForSettingsChanges: readonly string[] = [
  // TODO: Add examples
];
const allowedMutations: readonly string[] = [
  ...mutationFieldsForSettingsChanges,
  'logDB',
];

const allowedQueries: readonly string[] = [];

export const buildMeshConfigOptions = (): GetMeshOptions => {
  const cache = new LRUCache();
  /**
   * We do not use the GraphQL Subscriptions but it
   * is required from the types to create an instance of pubsub
   */
  const pubsub = new PubSub() as MeshPubSub;
  return {
    pubsub,
    cache, // TODO: We have to figure out at some point what to cache and how much.
    merger: StitchingMerger, // This is the default strategy for merging multiple schemas together
    sources: [
      // TODO: Find an online public gql service that can simulate our environments problem
      {
        name: 'ServiceA',
        handler: new GraphQLHandler({
          pubsub,
          cache,
          name: 'ServiceA',
          config: {
            endpoint: Endpoints.SERVICE_A,
            customFetch,
          },
        }),
      },
      {
        name: 'ChangelogDB',
        handler: new MySQLHandler({
          cache,
          pubsub,
          name: 'ChangelogDB',
          config: {
            // TODO: Add a pool via mysql package
            // pool: DatabasePools.CHANGELOG_DB.getPool(),
          },
        }),
      },
    ],
    additionalResolvers,
    additionalTypeDefs: [additionalTypeDefs], // Needs to be wrapped in an array
    transforms: [
      new CacheTransform({
        cache,
        pubsub,
        config: [
          {
            // TODO: Add some cache example
            field: 'Query.TODO',
            // TODO: Add cache key
            cacheKey: 'TODO',
            invalidate: {
              ttl: 60 * 60, // invalidate every 60 minutes
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
