export type ChangelogTypes = {
  id: number;
  user_uuid: string;
  date_of_change: Date;
  field_id: string;
  old_value: string;
  new_value: string;
  comment: string;
};

export const CHANGELOG_COLUMN_NAMES = {
  ID: 'id',
  USER_UUID: 'user_uuid',
  DATE_OF_CHANGE: 'date_of_change',
  FIELD_ID: 'field_id',
  OLD_VALUE: 'old_value',
  NEW_VALUE: 'new_value',
  COMMENT: 'comment',
};

export const CHANGELOG_LIVE_TABLE = {
  TABLE_NAME: 'changelog',
  COLUMN_NAMES: CHANGELOG_COLUMN_NAMES,
};

export const CHANGELOG_DEV_TABLE = {
  TABLE_NAME: 'changelog_dev',
  COLUMN_NAMES: CHANGELOG_COLUMN_NAMES,
};
