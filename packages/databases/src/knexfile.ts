import knex from 'knex';
import dotenv from 'dotenv';

// Get the path to project root
const envPath = `${process.cwd().split('packages')[0]}.env`;
console.log(envPath);
dotenv.config({ path: envPath });

const DB_PORT = process.env.DB_PORT
  ? parseInt(process.env.DB_PORT, 10)
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
