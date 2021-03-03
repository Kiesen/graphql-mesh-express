export type MutationConfig = {
  [mutationName: string]: UserRight;
};

export enum UserRight {
  // TODO: Might need to change name
  SERVICE_A_READ = 'SERVICE_A_READ',
  SERVICE_A_WRITE = 'SERVICE_A_WRITE',
}

export const mutationConfig: MutationConfig = {
  updateServiceA: UserRight.SERVICE_A_READ,
};
