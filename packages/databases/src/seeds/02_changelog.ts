import * as Knex from 'knex';
import faker from 'faker';

import {
  CHANGELOG_LIVE_TABLE,
  CHANGELOG_DEV_TABLE,
  ChangelogTypes,
} from '../config/change';
import { USER_TABLE, User } from '../config/user';

type ChangelogSeed = Omit<ChangelogTypes, 'id'>;

const createSeeds = async (knex: Knex): Promise<ChangelogSeed[]> => {
  const numberOfSeeds = parseInt(process.env.CHANGES_SEED_AMOUT, 10);
  const seeds: ChangelogSeed[] = [];

  const users: User[] = await knex
    .select(USER_TABLE.COLUMN_NAMES.UUID)
    .from(USER_TABLE.TABLE_NAME);

  for (let seed = 0; seed < numberOfSeeds; seed++) {
    const changedValue = faker.random.boolean();
    const change: ChangelogSeed = {
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
  // Seed the changelog live table
  const liveSeeds = await createSeeds(knex);
  await knex(CHANGELOG_LIVE_TABLE.TABLE_NAME).del();
  await knex(CHANGELOG_LIVE_TABLE.TABLE_NAME).insert(liveSeeds);

  // Seed the changelog dev table
  const devSeeds = await createSeeds(knex);
  await knex(CHANGELOG_DEV_TABLE.TABLE_NAME).del();
  await knex(CHANGELOG_DEV_TABLE.TABLE_NAME).insert(devSeeds);
}
