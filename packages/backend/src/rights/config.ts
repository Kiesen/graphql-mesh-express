export type MutationConfig = {
  [mutationName: string]: UserRight;
};

export enum UserRight {
  GRAPHQL_FAKER_READ = 'GRAPHQL_FAKER_READ',
  GRAPHQL_FAKER_WRITE = 'GRAPHQL_FAKER_WRITE',
}

export const mutationConfig: MutationConfig = {
  live_updateTodoContent: UserRight.GRAPHQL_FAKER_WRITE,
  dev_updateTodoContent: UserRight.GRAPHQL_FAKER_WRITE,
};
