import mysql from 'mysql';
import dotenv from 'dotenv';

// Get path to .env file which is located in the project root dir
const envPath = `${process.cwd().split('packages')[0]}.env`;
dotenv.config({ path: envPath });

const port = process.env.MYSQL_PORT
  ? parseInt(process.env.MYSQL_PORT, 10)
  : 3306;

const connectionLimit = process.env.MYSQL_CONNECTION_LIMIT
  ? parseInt(process.env.MYSQL_CONNECTION_LIMIT, 10)
  : 10;

const mysqlConnection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: port,
  connectionLimit: connectionLimit,
});

export default mysqlConnection;
