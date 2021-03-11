import gql from 'graphql-tag';

export const additionalTypeDefs = gql`
  extend type Query {
    userRights: [String!]!
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
