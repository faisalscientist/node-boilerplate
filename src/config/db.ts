import dotenv from 'dotenv';
dotenv.config();

export const dbConfig =  {
  host: process.env.DB_CONNECTION_HOST,
  database: process.env.DB_CONNECTION_DB,
  user: process.env.DB_CONNECTION_USER,
  password: process.env.DB_CONNECTION_PASSWORD,
}
