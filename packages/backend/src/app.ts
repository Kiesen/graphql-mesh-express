import express from 'express';
import graphqlHTTP from 'express-graphql';
import { getMeshConfig } from '@src/mesh/mesh';
import { getUserRights } from '@src/middleware/getUserRights';
// TODO:
// import { persistChangeExtension } from '../changes/persistChangeExtension';

// const NODE_ENV = process.env.NODE_ENV as
//   | 'test'
//   | 'development'
//   | 'staging'
//   | 'production';

const app = express();

// TODO: Add persist change extension
const persistChangeExtension: any = () => void 0;
// TODO: Add logDBMutationValidation
// const logDBMutationValidation: any = () => {};

app.get('/ping', (req, res) => {
  return res.send('pong');
});

getMeshConfig()
  .then(
    ({
      schema,
      contextBuilder,
      cache,
    }: // mutationFieldsForSettingsChanges,
    any) => {
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
        getUserRights,
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
            // logDBMutationValidation(mutationFieldsForSettingsChanges),
          ],
        }))
      );
    }
  )
  .catch((error: Error) => {
    console.error('GraphQL Mesh failed to build. Error: %s', error);
  });

export { app };
