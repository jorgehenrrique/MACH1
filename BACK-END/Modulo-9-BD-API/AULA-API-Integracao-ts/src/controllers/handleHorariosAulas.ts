import createDBClient from '../db/connection';
import { HorarioAulaService } from '../services/horariosAulas.service';

export async function horariosAulasList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const horarioAulaService = new HorarioAulaService(db);

  try {
    const horarioAulas = await horarioAulaService.getAll();
    res.json(horarioAulas);
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
  const horarioAulaService = new HorarioAulaService(db);

  const { id } = req.params;

  try {
    const horarioAula = await horarioAulaService.find(id);
    res.json(horarioAula);
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
  const horarioAulaService = new HorarioAulaService(db);

  try {
    const horarioAula = await horarioAulaService.create(req.body);
    res.json(horarioAula);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function horariosAulasUpdate(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const horarioAulaService = new HorarioAulaService(db);

  try {
    const horarioAula = await horarioAulaService.update(
      req.params.id,
      req.body
    );
    res.json(horarioAula);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

export async function horariosAulasDelete(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const horarioAulaService = new HorarioAulaService(db);

  try {
    const user = await horarioAulaService.delete(req.params.id);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({
      error,
      message: error.message,
    });
  } finally {
    await db.end();
  }
}
