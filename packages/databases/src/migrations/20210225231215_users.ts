import * as Knex from 'knex';
import { USER_TABLE } from '../config/tables';

export async function up(knex: Knex): Promise<void> {
  const { TABLE_NAME, COLUMN_NAMES } = USER_TABLE;
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.uuid(COLUMN_NAMES.UUID).notNullable().unique();
    table.text(COLUMN_NAMES.name).notNullable().unique;
  });
}

export async function down(knex: Knex): Promise<void> {
  const { TABLE_NAME } = USER_TABLE;
  return knex.schema.dropTable(TABLE_NAME);
}
