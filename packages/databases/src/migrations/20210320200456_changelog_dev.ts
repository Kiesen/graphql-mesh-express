import * as Knex from 'knex';
import { CHANGELOG_DEV_TABLE } from '../config/change';

import { USER_TABLE } from '../config/user';

export async function up(knex: Knex): Promise<void> {
  const { TABLE_NAME, COLUMN_NAMES } = CHANGELOG_DEV_TABLE;
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements(COLUMN_NAMES.ID).notNullable().unique();
    table.timestamp(COLUMN_NAMES.DATE_OF_CHANGE).notNullable();
    table.text(COLUMN_NAMES.FIELD_ID).notNullable();
    table.text(COLUMN_NAMES.OLD_VALUE).notNullable();
    table.text(COLUMN_NAMES.NEW_VALUE).notNullable();
    table.text(COLUMN_NAMES.COMMENT).notNullable();
    table
      .uuid(COLUMN_NAMES.USER_UUID)
      .references(USER_TABLE.COLUMN_NAMES.UUID)
      .inTable(USER_TABLE.TABLE_NAME)
      .index();
  });
}

export async function down(knex: Knex): Promise<void> {
  const { TABLE_NAME } = CHANGELOG_DEV_TABLE;
  return knex.schema.dropTable(TABLE_NAME);
}
