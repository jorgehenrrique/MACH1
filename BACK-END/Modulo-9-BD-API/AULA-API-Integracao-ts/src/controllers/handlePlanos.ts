import createDBClient from '../db/connection';

export async function planosList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();

  try {
    const result = await db.query('SELECT * FROM planos');
    res.json(result.rows);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar os planos',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function planosListId(req: any, res: any) {
  const db = createDBClient();
  await db.connect();

  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM planos WHERE id=$1', [id]);
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

export async function planosAdd(req: any, res: any) {
  const db = createDBClient();
  await db.connect();

  const { nome, descricao, preco } = req.body;

  try {
    const query = `INSERT INTO planos (nome, descricao, preco)
          VALUES ($1, $2, $3) Returning *;`;
    const values = [nome, descricao, preco];
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
