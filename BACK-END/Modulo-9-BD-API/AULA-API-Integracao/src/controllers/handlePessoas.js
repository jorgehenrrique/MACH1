const { createDBClient } = require('../db/connection');

// Lista pessoas
async function pessoasList(req, res) {
  const db = createDBClient();
  db.connect();

  try {
    const result = await db.query('SELECT * FROM pessoas');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar as pessoas',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

// Lista pessoa por id
async function pessoasListId(req, res) {
  const db = createDBClient();
  await db.connect();

  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM pessoas WHERE id=$1', [id]);
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

// Adiciona pessoas
async function pessoasAdd(req, res) {
  const db = createDBClient();
  await db.connect();

  const { nome, cgc, tipo_pessoa, email, tipo_cadastro, ativo } = req.body;

  try {
    const query = `INSERT INTO pessoas (nome, cgc, tipo_pessoa, email, tipo_cadastro, ativo)
          VALUES ($1, $2, $3, $4, $5, $6) Returning *;`;

    const values = [nome, cgc, tipo_pessoa, email, tipo_cadastro, ativo];
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

module.exports = { pessoasList, pessoasListId, pessoasAdd };
