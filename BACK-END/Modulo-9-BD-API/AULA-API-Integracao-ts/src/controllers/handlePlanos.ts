import createDBClient from '../db/connection';
import { PlanoService } from '../services/plano.service';

export async function planosList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const planoService = new PlanoService(db);

  try {
    const planos = await planoService.getAll();
    res.json(planos);
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
  const planoService = new PlanoService(db);

  const { id } = req.params;

  try {
    const plano = await planoService.find(id);
    res.json(plano);
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
  const planoService = new PlanoService(db);

  try {
    const plano = await planoService.create(req.body);
    res.json(plano);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function planosUpdate(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const planoService = new PlanoService(db);

  try {
    const plano = await planoService.update(req.params.id, req.body);
    res.json(plano);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}
