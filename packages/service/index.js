const express = require('express');
const { graphqlHTTP } = require('express-graphql');

var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type Todo {
  id: ID!
  content: String!
}

type Query {
  todoList: [Todo]!
  todo: Todo
}

type Mutation {
  updateTodoContent(content: String!): Todo
}
`);

// The root provides a resolver function for each API endpoint
var root = {
  todo: () => {
    return {
      id: 1,
      content: 'Some content for 1',
    };
  },
  todoList: () => {
    return [
      {
        id: 1,
        content: 'Some content for 1',
      },
    ];
  },
};

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: root,
  })
);

app.listen(4000);

/**
 * ! SECOND SERVER
 */

// The root provides a resolver function for each API endpoint
var root2 = {
  todo: () => {
    return {
      id: 2,
      content: 'Some content for 2',
    };
  },
  todoList: () => {
    return [
      {
        id: 1,
        content: 'Some content for 2',
      },
    ];
  },
};

const app2 = express();

app2.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: root2,
  })
);

app2.listen(5000);
