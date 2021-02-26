export const CHANGES_TABLE = {
  TABLE_NAME: 'changes',
  COLUMN_NAMES: {
    ID: 'id',
    USER_UUID: 'member_uuid',
    SERVICE_ID: 'advertiser_id',
    DATE_OF_CHANGE: 'date_of_change',
    FIELD_NAMESPACE: 'field_namespace',
    FIELD_ID: 'field_id',
    OLD_VALUE: 'old_value',
    NEW_VALUE: 'new_value',
    COMMENT: 'comment',
  },
};

export const USER_TABLE = {
  TABLE_NAME: 'user',
  COLUMN_NAMES: {
    UUID: 'uuid',
    NAME: 'name',
  },
};
