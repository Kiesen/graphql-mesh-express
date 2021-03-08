export const Endpoints = {
  GRAPHQL_ZERO_DEV: 'https://graphqlzero.almansi.me/',

  /**
   * Using the same api twice for now. If there is ever the need
   * to extend types or to make some difference between the types
   * of dev and prod version then we could
   * - pull out one of those into a separate service (accessed by gql mesh)
   * - extend the types for that service with some additional ones
   */
  GRAPHQL_ZERO_PROD: 'https://graphqlzero.almansi.me/',
};
