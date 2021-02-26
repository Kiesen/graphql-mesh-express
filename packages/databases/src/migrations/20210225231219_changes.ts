import * as Knex from 'knex';
import { CHANGES_TABLE } from '../config/tables';

export async function up(knex: Knex): Promise<void> {
  const { TABLE_NAME, COLUMN_NAMES } = CHANGES_TABLE;
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements(COLUMN_NAMES.ID).notNullable().unique();
    table.uuid(COLUMN_NAMES.USER_UUID).notNullable().index();
    table.integer(COLUMN_NAMES.SERVICE_ID).notNullable();
    table.timestamp(COLUMN_NAMES.DATE_OF_CHANGE).notNullable();
    table.text(COLUMN_NAMES.FIELD_NAMESPACE).notNullable();
    table.text(COLUMN_NAMES.FIELD_ID).notNullable();
    table.text(COLUMN_NAMES.OLD_VALUE).notNullable();
    table.text(COLUMN_NAMES.NEW_VALUE).notNullable();
    table.text(COLUMN_NAMES.COMMENT).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  const { TABLE_NAME } = CHANGES_TABLE;
  return knex.schema.dropTable(TABLE_NAME);
}
