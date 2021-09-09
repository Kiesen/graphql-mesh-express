import gql from 'graphql-tag';
import { Environment } from '@internalTypes/schema';

const changedFields = /* GraphQL */ `
    fieldId: String!
    oldValue: String!
    newValue: String!
    path: String!
`;

export const envRelatedTypeDefs = (
  environment: Environment
): string => {
  const envWithSuffix = environment + '_';
  return /* GraphQL */ `
    extend type ${envWithSuffix}Todo {
    comments: [String]!
  }
  `;
};

export const additionalTypeDefs = gql`
  extend type Query {
    userRights: [String!]!
  }

  extend type Mutation {
    logDB(input: LogDBChangesInput!): LogDBChanges
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

  input LogDBChangesInput {
    comment: String!
    fields: [LogDBChangedFieldInput!]!
    environment: Environment!
  }  

  enum Environment {
    live
    dev
  }

  extend type Todo {
    comments: [String]!
  }
`;
