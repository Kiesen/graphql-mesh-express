import gql from 'graphql-tag';

const changedFields = /* GraphQL */ `
    fieldId: String!
    oldValue: String!
    newValue: String!
    path: String!
`;

export const additionalTypeDefs = gql`
  extend type Query {
    userRights: [String!]!
  }

  extend type Mutation {
    logDB(input: LogDBChangesInput!): LogDBChanges
  }

  input LogDBChangesInput {
    comment: String!
    fields: [LogDBChangedFieldInput!]!
    environment: Environment!
  }

  type LogDBChanges {
    comment: String!
    fields: [LogDBChangedField!]!
    environment: Environment!
  }

  input LogDBChangedFieldInput {
    ${changedFields}
  }

  type LogDBChangedField {
    ${changedFields}
  }

  extend type Manager {
    additionalInfo: AdditionalManagerInfo!
  }

  type AdditionalManagerInfo {
    address: String!
  }

  enum Environment {
    live
    dev
  }
`;
