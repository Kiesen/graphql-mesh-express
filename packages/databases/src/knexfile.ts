import knex from 'knex';
import dotenv from 'dotenv';

// Get path to .env file which is located in the project root dir
const envPath = `${process.cwd().split('packages')[0]}.env`;
dotenv.config({ path: envPath });

const DB_PORT = process.env.MYSQL_PORT
  ? parseInt(process.env.MYSQL_PORT, 10)
  : 3306;

const config: knex.Config = {
  client: 'mysql',
  connection: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: DB_PORT,
    charset: 'utf8',
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};

export default config;
