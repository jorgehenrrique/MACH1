const { createDBClient } = require('../db/connection');

async function modalidadesList(req, res) {
  const db = createDBClient();
  await db.connect();

  try {
    const result = await db.query('SELECT * FROM modalidades');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar as modalidades',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

async function modalidadesListId(req, res) {
  const { id } = req.params;

  const db = createDBClient();
  await db.connect();

  try {
    const result = await db.query('SELECT * FROM modalidades WHERE id=$1', [
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

module.exports = { modalidadesList, modalidadesListId };
