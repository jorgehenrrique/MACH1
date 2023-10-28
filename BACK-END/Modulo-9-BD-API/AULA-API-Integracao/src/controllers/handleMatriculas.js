const { createDBClient } = require('../db/connection');

async function matriculasList(req, res) {
  const db = createDBClient();
  await db.connect();

  try {
    const result = await db.query('SELECT * FROM matriculas');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar as matriculas',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

async function matriculasListId(req, res) {
  const db = createDBClient();
  await db.connect();

  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM matriculas WHERE id=$1', [id]);
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

async function matriculasAdd(req, res) {
  const db = createDBClient();
  await db.connect();

  const {
    aluno_id,
    plano_id,
    dia_vencimento,
    valor_mensalidade,
    data_inicio,
    data_fim,
  } = req.body;

  try {
    const query = `INSERT INTO matriculas (aluno_id,
      plano_id,
      dia_vencimento,
      valor_mensalidade,
      data_inicio,
      data_fim)
          VALUES ($1, $2, $3, $4, $5, $6) Returning *;`;
    const values = [
      aluno_id,
      plano_id,
      dia_vencimento,
      valor_mensalidade,
      data_inicio,
      data_fim,
    ];
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

module.exports = { matriculasList, matriculasListId, matriculasAdd };
