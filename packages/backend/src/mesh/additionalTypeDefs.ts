import gql from 'graphql-tag';

export const additionalTypeDefs = gql`
  #  extend type Query {

  #   }

  enum Environment {
    live
    dev
  }
`;
