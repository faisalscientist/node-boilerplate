import dotenv from 'dotenv';
dotenv.config();

export const appConfig =  {
  apiKey: process.env.API_KEY,
  port: process.env.PORT
}
