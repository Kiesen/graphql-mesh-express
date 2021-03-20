import { Environment } from '@internalTypes/schema';

/**
 * Helper function to add environment prefixes to allowed
 * queries, mutations or configs
 */
export const addEnvironmentPrefix = (values: string[]): string[] => {
  let result: string[] = [];
  for (const entry of values) {
    result = result.concat(
      Object.values(Environment).map(
        (environment) => `${environment}_${entry}`
      )
    );
  }
  return result;
};
