import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { readFileSync } from 'fs';
import { join } from 'path';

import { buildSchema } from 'graphql';

const schemaSDL = readFileSync(
  join(__dirname, './sameSchema.graphql'),
  'utf-8'
);

// Construct a schema, using GraphQL schema language
const schema = buildSchema(schemaSDL);

const firstServerResolvers = {
  todo: (): any => {
    return {
      id: 1,
      content: 'Some content for 1',
    };
  },
  todoList: (): any => {
    return [
      {
        id: 1,
        content: 'Some content for 1',
      },
    ];
  },
};

const firstApp = express();

firstApp.get('/sameSchema.graphql', (req, res) => {
  res.contentType('text/plain').send(schemaSDL);
});

firstApp.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: firstServerResolvers,
  })
);

firstApp.listen(4000, () => {
  console.log(
    'Started first data source server with the same schema under http://localhost:4000/graphql?query={todo{id}}'
  );
});

/**
 * ! SECOND server with the same schema
 */

const secondServerResolvers = {
  todo: (): any => {
    return {
      id: 2,
      content: 'Some content for 2',
    };
  },
  todoList: (): any => {
    return [
      {
        id: 1,
        content: 'Some content for 2',
      },
    ];
  },
};

const secondApp = express();

secondApp.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: secondServerResolvers,
  })
);

secondApp.listen(5000, () => {
  console.log(
    'Started second data source server with the same schema under http://localhost:5000/graphql?query={todo{id}}'
  );
});
