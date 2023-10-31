import createDBClient from '../db/connection';

export async function modalidadesList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();

  try {
    const result = await db.query('SELECT * FROM modalidades');
    res.json(result.rows);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar as modalidades',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function modalidadesListId(req: any, res: any) {
  const db = createDBClient();
  await db.connect();

  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM modalidades WHERE id=$1', [
      id,
    ]);
    res.json(result.rows[0]);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: `Erro ao buscar o id: ${id}`,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function modalidadesAdd(req: any, res: any) {
  const db = createDBClient();
  await db.connect();

  const { nome } = req.body;

  try {
    const query = `INSERT INTO modalidades (nome)
          VALUES ($1) Returning *;`;
    const values = [nome];
    const result = await db.query(query, values);
    res.json(result.rows[0]);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}
