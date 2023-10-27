const { createDBClient } = require('../db/connection');

async function planosList(req, res) {
  const db = createDBClient();
  await db.connect();

  try {
    const result = await db.query('SELECT * FROM planos');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar os planos',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

async function planosListId(req, res) {
  const db = createDBClient();
  await db.connect();
}

async function planosAdd(req, res) {
  const db = createDBClient();
  await db.connect();
}

module.exports = { planosList, planosListId, planosAdd };
