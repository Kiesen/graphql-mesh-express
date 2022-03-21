import { GraphQLSchema } from 'graphql';
import GraphQLHandler from '@graphql-mesh/graphql';
import MySQLHandler from '@graphql-mesh/mysql';
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
import PrefixTransform from '@graphql-mesh/transform-prefix';
import { UnwrapPromise } from '@internalTypes/promise';
import mysqlConnection from '@db/connections/mysql';
import { addEnvironmentPrefix } from '@util/prefix';
import { DefaultLogger } from '@graphql-mesh/utils';
import { getMesh, GetMeshOptions } from '@graphql-mesh/runtime';

import {
  InMemoryStoreStorageAdapter,
  MeshStore,
} from '@graphql-mesh/store';

/**
 * These mutations are going to be used also in relation to our
 * `logDB` mutation.
 */
const allowedEnvRelatedMutations: readonly string[] = addEnvironmentPrefix(
  ['updateTodoContent']
);

const allowedMutations: readonly string[] = [
  ...allowedEnvRelatedMutations,
  'logDB',
];

const allowedEnvRelatedQueries: readonly string[] = addEnvironmentPrefix(
  ['todo', 'todoList']
);

const allowedQueries: readonly string[] = [
  ...allowedEnvRelatedQueries,
  'getChangelog',
  'getChangelogDev',
  'userRights',
];

export const buildMeshConfigOptions = (): GetMeshOptions => {
  const cache = new LRUCache();
  /**
   * We do not use the GraphQL Subscriptions but it
   * is required from the types to create an instance of pubsub
   */
  const pubsub = (new PubSub() as unknown) as MeshPubSub;

  const logger = new DefaultLogger('TEST');

  /**
   * TODO: I am not 100% sure what the store does?
   * I think the store replaces the Introspection Cache which was used to fetch schemas.
   * Now the schemas are contained in a store. But probably a better way of using it is to use the GQL Build Artifacts.
   * https://github.com/Urigo/graphql-mesh/blob/master/website/docs/recipes/build-mesh-artifacts.md#why-you-should-build-mesh-artifacts
   */
  const store = new MeshStore(
    '.mesh',
    new InMemoryStoreStorageAdapter(),
    {
      readonly: false,
      validate: false,
    }
  );

  // TODO: I believe these properties do not do anything but they satisfy the types
  // of the corresponding transforms / input source modules
  const apiName = '';
  const baseDir: string = (undefined as unknown) as any;
  /* eslint-disable @typescript-eslint/no-empty-function */
  const importFn = (() => {}) as any;

  return {
    pubsub,
    cache,
    merger: new StitchingMerger({
      cache,
      logger,
      pubsub,
      store,
    }),
    sources: [
      {
        name: 'GraphqlService_dev',
        handler: new GraphQLHandler({
          store,
          importFn,
          logger,
          baseDir,
          pubsub,
          cache,
          name: 'GraphqlService_dev',
          config: {
            endpoint: Endpoints.FAKE_GRAPHQL_DEV,
            customFetch,
          },
        }),
        transforms: [
          new PrefixTransform({
            apiName,
            importFn,
            baseDir,
            pubsub,
            cache,
            config: {
              value: 'dev_',
              includeRootOperations: true,
            },
          }),
        ],
      },
      {
        name: 'GraphqlService_live',
        handler: new GraphQLHandler({
          store,
          importFn,
          logger,
          baseDir,
          pubsub,
          cache,
          name: 'GraphqlService_live',
          config: {
            endpoint: Endpoints.FAKE_GRAPHQL_LIVE,
            customFetch,
          },
        }),
        transforms: [
          new PrefixTransform({
            apiName,
            importFn,
            baseDir,
            pubsub,
            cache,
            config: {
              value: 'live_',
              includeRootOperations: true,
            },
          }),
        ],
      },
      {
        name: 'InternalDB',
        handler: new MySQLHandler({
          store,
          importFn,
          logger,
          baseDir,
          cache,
          pubsub,
          name: 'InternalDB',
          config: {
            pool: mysqlConnection,
          },
        }),
      },
    ],
    additionalResolvers,
    additionalTypeDefs: [additionalTypeDefs],
    transforms: [
      new CacheTransform({
        apiName,
        baseDir,
        importFn,
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
      FilterTransform({
        apiName,
        baseDir,
        importFn,
        cache,
        pubsub,
        config: [
          `Mutation.{${allowedMutations.join(', ')}}`,
          `Query.{${allowedQueries.join(', ')}}`,
        ],
      }),
      new ResolversCompositionTransform({
        apiName,
        baseDir,
        importFn,
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
  meshContext: Record<string, unknown>;
  cache: UnwrapPromise<ReturnType<typeof getMesh>>['cache'];
  allowedMutations: readonly string[];
}> => {
  const { schema, meshContext, cache } = await getMesh(
    buildMeshConfigOptions()
  );

  return {
    schema,
    meshContext,
    cache,
    allowedMutations,
  };
};
