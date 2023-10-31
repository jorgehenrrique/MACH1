import createDBClient from '../db/connection';

export async function matriculasList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();

  try {
    const result = await db.query('SELECT * FROM matriculas');
    res.json(result.rows);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar as matriculas',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function matriculasListId(req: any, res: any) {
  const db = createDBClient();
  await db.connect();

  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM matriculas WHERE id=$1', [id]);
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

export async function matriculasAdd(req: any, res: any) {
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
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}
