import createDBClient from '../db/connection';

export async function horariosAulasList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();

  try {
    const result = await db.query('SELECT * FROM horario_aulas');
    res.json(result.rows);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar os horario_aulas',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function horariosAulasListId(req: any, res: any) {
  const db = createDBClient();
  await db.connect();

  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM horario_aulas WHERE id=$1', [
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

export async function horariosAulasAdd(req: any, res: any) {
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
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}
