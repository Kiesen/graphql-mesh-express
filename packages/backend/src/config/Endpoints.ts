export const Endpoints = {
  FAKE_GRAPHQL_LIVE: 'http://localhost:9002/graphql',

  /**
   * Using the same api twice for now. If there is ever the need
   * to extend types or to make some difference between the types
   * of dev and live version then we could
   * - pull out one of those into a separate service (use the `fake-graphql` package)
   * - extend the types for that service with some additional ones
   */
  FAKE_GRAPHQL_DEV: 'http://localhost:9002/graphql',
};
