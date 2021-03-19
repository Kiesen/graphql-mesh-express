import express from 'express';
import graphqlHTTP from 'express-graphql';
import { getMeshConfig } from '@src/mesh/mesh';
import { getUserRights } from '@src/middleware/getUserRights';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { retry } from '@util/retry';
import { logDBMutationValidation } from '@src/validation/logDBMutationValidation';
import { persistChangeExtension } from '@src/changes/persistChangeExtension';

const app = express();

// TODO: Add persist change extension

app.get('/ping', (req, res) => {
  return res.send('pong');
});

app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));

retry(
  getMeshConfig,
  () => Promise.resolve(true),
  (delay, count, error) => {
    console.error(
      `Error during GraphQL Mesh Schema creation: "${error}". Scheduled retry number ${count} in ${delay} seconds.`
    );
    // TODO: Get where errors are coming from
  },
  {
    maxRetries: 5,
    backOffMultiplier: 2,
    delayMilliseconds: 2000, // 2s
    maxDelayMilliseconds: 16000, // 16s
    retryOnReject: true,
  }
)
  .then(
    ({
      schema,
      contextBuilder,
      cache,
      mutationFieldsForSettingsChanges,
    }) => {
      console.log('GraphQL Mesh Schema has been successfully built');

      const extensions = (
        info: graphqlHTTP.RequestInfo
      ): { [key: string]: unknown } => ({
        ...persistChangeExtension(info),
      });

      app.use(
        '/graphql',
        getUserRights,
        graphqlHTTP(async (req, res) => ({
          schema,
          context: await contextBuilder({
            req,
            res,
            cache,
            schema,
          }),
          graphiql: true,
          extensions,
          validationRules: [
            logDBMutationValidation(mutationFieldsForSettingsChanges),
          ],
        }))
      );
    }
  )
  .catch((error: Error) => {
    console.error('GraphQL Mesh failed to build. Error: %s', error);
  });

export { app };
