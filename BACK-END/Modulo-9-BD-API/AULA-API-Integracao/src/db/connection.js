const dotenv = require('dotenv');
const { Client } = require('pg');

dotenv.config();
const { DB_PASS } = process.env;

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'superfit',
  password: DB_PASS,
  port: 5432,
});

exports.db = db;
// module.exports.db = db;
// module.exports = { db };
