import gql from 'graphql-tag';

// const changedFields = /* GraphQL */ `
//     fieldId: String!
//     oldValue: String!
//     newValue: String!
//     path: String!
// `;

// input LogDBChangesInput {
//   comment: String!
//   fields: [LogDBChangedFieldInput!]!
//   environment: Environment!
// }

// type LogDBChanges {
//   comment: String!
//   fields: [LogDBChangedField!]!
//   environment: Environment!
// }

// input LogDBChangedFieldInput {
//   ${changedFields}
// }

// type LogDBChangedField {
//   ${changedFields}
// }

// extend type Mutation {
//   logDB(input: LogDBChangesInput!): LogDBChanges
// }

export const additionalTypeDefs = gql`
  extend type Query {
    userRights: [String!]!
  }

  type Manager {
    address: String!
  }

  enum Environment {
    live
    dev
  }
`;
