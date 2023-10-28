const { createDBClient } = require('../db/connection');

async function horariosAulasList(req, res) {
  const db = createDBClient();
  await db.connect();

  try {
    const result = await db.query('SELECT * FROM horario_aulas');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar os horario_aulas',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

async function horariosAulasListId(req, res) {
  const db = createDBClient();
  await db.connect();

  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM horario_aulas WHERE id=$1', [
      id,
    ]);
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

async function horariosAulasAdd(req, res) {
  const db = createDBClient();
  await db.connect();

  const { dia_semana, hora_inicio, hora_fim, modalidade_id, instrutor_id } =
    req.body;

  try {
    const query = `INSERT INTO horario_aulas (dia_semana, hora_inicio, hora_fim, modalidade_id, instrutor_id)
          VALUES ($1, $2, $3, $4, $5) Returning *;`;
    const values = [
      dia_semana,
      hora_inicio,
      hora_fim,
      modalidade_id,
      instrutor_id,
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

module.exports = { horariosAulasList, horariosAulasListId, horariosAulasAdd };
