import gql from 'graphql-tag';

const changedFields = /* GraphQL */ `
    fieldNamespace: String!
    fieldId: String!
    fieldName: String!
    oldValueJson: String!
    oldValueAsDisplayed: String!
    newValueJson: String!
    newValueAsDisplayed: String!
    path: String!
`;

export const additionalTypeDefs = gql`
  extend type Query {
    userRights: [String!]!
  }

  extend type Mutation {
    logDB(input: ChangesInput!): Changes
  }

  input ChangesInput {
    comment: String!
    advertiserId: Int!
    fields: [ChangedFieldInput!]!
    environment: Environment!
  }

  type Changes {
    comment: String!
    advertiserId: Int!
    fields: [ChangedField!]!
    environment: Environment!
  }

  input ChangedFieldInput {
    ${changedFields}
  }

  type ChangedField {
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
