/**
 *  If you would like to update types use
 * `// @ts-nocheck` on top of the file
 * to ignore failing types and build a working schema
 * out of which we can generate the new types
 * by running the command `yarn run graphql:generate:types`
 */
const additionalResolvers = {
  Mutation: {
    // TODO: Make the logDBResolver
    // logDB: logDBResolver,
  },
  Query: {
    // TODO: Extend with some examples
  },
  // TODO: Add some examples
};

export { additionalResolvers };
