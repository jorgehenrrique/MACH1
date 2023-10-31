import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();
const { DB_USER, DB_HOST, DB_NAME, DB_PASS, DB_PORT } = process.env;

// Essa opção da erro, pois não pode ter mais de uma instancia em uso do client
// const db = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'superfit',
//   password: DB_PASS,
//   port: 5432,
// });

function createDBClient() {
  return new Client({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASS,
    port: Number(DB_PORT),
  });
}

export default createDBClient;
