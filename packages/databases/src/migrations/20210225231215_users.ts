import * as Knex from 'knex';
import { USERS_TABLE } from '../config/users';

export async function up(knex: Knex): Promise<void> {
  const { TABLE_NAME, COLUMN_NAMES } = USERS_TABLE;
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.uuid(COLUMN_NAMES.UUID).notNullable().unique();
    table.text(COLUMN_NAMES.NAME).notNullable().unique;
  });
}

export async function down(knex: Knex): Promise<void> {
  const { TABLE_NAME } = USERS_TABLE;
  return knex.schema.dropTable(TABLE_NAME);
}
