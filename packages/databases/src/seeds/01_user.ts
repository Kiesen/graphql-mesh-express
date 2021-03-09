import * as Knex from 'knex';
import faker from 'faker';

import { USERS_TABLE, User } from '../config/users';
import '../env';

const { TABLE_NAME } = USERS_TABLE;

const createSeeds = (): User[] => {
  const numberOfSeeds = parseInt(process.env.USER_SEED_AMOUNT, 10);

  const seeds: User[] = [];

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

  await knex(TABLE_NAME).del();
  await knex(TABLE_NAME).insert(seeds);
}
