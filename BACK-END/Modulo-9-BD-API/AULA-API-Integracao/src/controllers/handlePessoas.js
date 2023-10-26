const { db } = require('../db/connection');

db.connect();

// Lista pessoas
async function pessoasList(req, res) {
  const result = await db.query('SELECT * FROM pessoas');
  res.json(result.rows);
}

// Lista pessoa por id
async function pessoasListId(req, res) {
  const { id } = req.params;
  const result = await db.query('SELECT * FROM pessoas WHERE id=$1', [id]);
  res.json(result.rows[0]);
}

// Adiciona pessoas
async function pessoasAdd(req, res) {
  try {
    const { nome, cgc, tipo_pessoa, email, tipo_cadastro, ativo } = req.body;

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
  }
}

module.exports = { pessoasList, pessoasListId, pessoasAdd };
