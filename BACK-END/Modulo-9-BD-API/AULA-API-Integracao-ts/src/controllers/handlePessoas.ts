import createDBClient from '../db/connection';
import { PessoaService } from '../services/pessoa.service';

// Lista pessoas
export async function pessoasList(_: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const pessoaService = new PessoaService(db);

  try {
    const users = await pessoaService.getAll();
    res.json(users);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: 'Erro ao buscar as pessoas',
      message: error.message,
    });
  } finally {
    await db.end();
  }
}

// Lista pessoa por id
export async function pessoasListId(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const pessoaService = new PessoaService(db);

  const { id } = req.params;

  try {
    const user = await pessoaService.find(id);
    res.json(user);
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

// Adiciona pessoas
export async function pessoasAdd(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const pessoaService = new PessoaService(db);

  try {
    const user = await pessoaService.create(req.body);
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

// Atualizar pessoas
export async function pessoasUpdate(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const pessoaService = new PessoaService(db);

  try {
    const user = await pessoaService.update(req.params.id, req.body);
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

// Deleta pessoa
export async function pessoasDelete(req: any, res: any) {
  const db = createDBClient();
  await db.connect();
  const pessoaService = new PessoaService(db);

  try {
    const user = await pessoaService.delete(req.params.id);
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
