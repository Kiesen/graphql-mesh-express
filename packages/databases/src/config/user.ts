export type User = {
  uuid: string;
  name: string;
};

export const USER_TABLE = {
  TABLE_NAME: 'user',
  COLUMN_NAMES: {
    UUID: 'uuid',
    NAME: 'name',
  },
};
