export type Change = {
  id: number;
  user_uuid: string;
  date_of_change: Date;
  field_id: string;
  old_value: string;
  new_value: string;
  comment: string;
};

export const CHANGES_TABLE = {
  TABLE_NAME: 'changes',
  COLUMN_NAMES: {
    ID: 'id',
    USER_UUID: 'user_uuid',
    DATE_OF_CHANGE: 'date_of_change',
    FIELD_ID: 'field_id',
    OLD_VALUE: 'old_value',
    NEW_VALUE: 'new_value',
    COMMENT: 'comment',
  },
};
