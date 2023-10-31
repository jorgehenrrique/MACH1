import createDBClient from '../db/connection';

export async function ModalidadesPlanosList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();

  try {
    const result = await db.query('SELECT * FROM modalidades_planos');
    res.json(result.rows);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar as modalidades_planos',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function ModalidadesPlanosListId(req: any, res: any) {
  const db = createDBClient();
  await db.connect();

  const { id } = req.params;

  try {
    const result = await db.query(
      'SELECT * FROM modalidades_planos WHERE plano_id=$1 OR modalidade_id=$1',
      [id]
    );
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

export async function ModalidadesPlanosAdd(req: any, res: any) {
  const db = createDBClient();
  await db.connect();

  const { plano_id, modalidade_id } = req.body;

  try {
    const query = `INSERT INTO modalidades_planos (plano_id, modalidade_id)
          VALUES ($1, $2) Returning *;`;
    const values = [plano_id, modalidade_id];
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
