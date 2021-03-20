import * as Knex from 'knex';
import faker from 'faker';

import { USER_TABLE, User } from '../config/user';
import {
  CHANGELOG_LIVE_TABLE,
  CHANGELOG_DEV_TABLE,
} from '../config/change';

const createSeeds = (): User[] => {
  const numberOfSeeds = parseInt(process.env.USER_SEED_AMOUNT, 10);

  const seeds: User[] = [
    {
      name: 'John Doe',
      uuid: '00000000-0000-0000-0000-000000000000',
    },
  ];

  for (let seed = 0; seed < numberOfSeeds; seed++) {
    const user: User = {
      uuid: faker.random.uuid(),
      name: faker.name.findName(),
    };
    seeds.push(user);
  }

  return seeds;
};

export async function seed(knex: Knex): Promise<void> {
  const seeds = createSeeds();

  // Delete relational user data (tables that use the user uuid as foreign key)
  await knex(CHANGELOG_LIVE_TABLE.TABLE_NAME).del();
  await knex(CHANGELOG_DEV_TABLE.TABLE_NAME).del();

  // Seed the user table
  await knex(USER_TABLE.TABLE_NAME).del();
  await knex(USER_TABLE.TABLE_NAME).insert(seeds);
}
