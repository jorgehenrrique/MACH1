const dotenv = require('dotenv');
const { Client } = require('pg');

dotenv.config();
const { DB_PASS } = process.env;

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
    user: 'postgres',
    host: 'localhost',
    database: 'superfit',
    password: DB_PASS,
    port: 5432,
  });
}

module.exports = { createDBClient };

// exports.db = db;
// module.exports.db = db;
// module.exports = { db };
