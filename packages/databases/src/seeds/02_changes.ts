import * as Knex from 'knex';
import faker from 'faker';

import { CHANGES_TABLE, Change } from '../config/changes';
import { USERS_TABLE, User } from '../config/users';
import '../env';

type ChangeSeed = Omit<Change, 'id'>;

const createSeeds = async (knex: Knex): Promise<ChangeSeed[]> => {
  const numberOfSeeds = parseInt(process.env.CHANGES_SEED_AMOUT, 10);
  const seeds: ChangeSeed[] = [];

  const users: User[] = await knex
    .select(USERS_TABLE.COLUMN_NAMES.UUID)
    .from(USERS_TABLE.TABLE_NAME);

  for (let seed = 0; seed < numberOfSeeds; seed++) {
    const changedValue = faker.random.boolean();
    const change: ChangeSeed = {
      user_uuid:
        users[Math.floor(Math.random() * users.length)]['uuid'],
      date_of_change: faker.date.past(),
      field_id: faker.random.word(),
      old_value: `${changedValue}`,
      new_value: `${!changedValue}`,
      comment: faker.lorem.words(),
    };
    seeds.push(change);
  }

  return seeds;
};

export async function seed(knex: Knex): Promise<void> {
  const seeds = await createSeeds(knex);

  await knex(CHANGES_TABLE.TABLE_NAME).del();
  await knex(CHANGES_TABLE.TABLE_NAME).insert(seeds);
}
