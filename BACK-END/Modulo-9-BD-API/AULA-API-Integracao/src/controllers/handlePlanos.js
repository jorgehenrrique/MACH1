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

  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM planos WHERE id=$1', [id]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: `Erro ao buscar o id: ${id}`,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

async function planosAdd(req, res) {
  const db = createDBClient();
  await db.connect();

  const { nome, descricao, preco } = req.body;

  try {
    const query = `INSERT INTO planos (nome, descricao, preco)
          VALUES ($1, $2, $3) Returning *;`;
    const values = [nome, descricao, preco];
    const result = await db.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

module.exports = { planosList, planosListId, planosAdd };
