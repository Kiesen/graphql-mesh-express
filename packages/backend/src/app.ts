import express from 'express';
import graphqlHTTP from 'express-graphql';
// import { getMeshConfig } from '@src/graphql/mesh/mesh';
// import { persistChangeExtension } from '../changes/persistChangeExtension';

const NODE_ENV = process.env.NODE_ENV as
  | 'test'
  | 'development'
  | 'staging'
  | 'production';

const app = express();

// TODO: Add get mesh config
const getMeshConfig: any = () => Promise.resolve();
// TODO: Add persist change extension
const persistChangeExtension: any = () => {};
// TODO: Add logDBMutationValidation
const logDBMutationValidation: any = () => {};

app.get('/ping', (req, res) => {
  return res.send('pong');
});

getMeshConfig()
  .then(
    ({
      schema,
      contextBuilder,
      cache,
      mutationFieldsForSettingsChanges,
    }: any) => {
      /**
       * Instead of one we now execute multiple extensions and join their return values.
       */
      const extensions = (
        info: graphqlHTTP.RequestInfo
      ): { [key: string]: unknown } => ({
        ...persistChangeExtension(info),
      });

      app.use(
        '/graphql',
        graphqlHTTP(async (req, res) => ({
          schema,
          context: await contextBuilder({
            req,
            res,
            cache,
            schema,
          }),
          graphiql: process.env.NODE_ENV === 'development',
          extensions,
          validationRules: [
            logDBMutationValidation(mutationFieldsForSettingsChanges),
          ],
        }))
      );
    }
  )
  .catch((error: Error) => {
    console.error(
      'GraphQL Mesh failed to build. Error: %s',
      error.message
    );
  });

export { app };
