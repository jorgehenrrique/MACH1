import { InterfaceCrud } from './interfaces';

type HorarioAulasModel = {
  id?: string;
  dia_semana: string;
  hora_inicio: string;
  hora_fim: string;
  modalidade_id: string;
  instrutor_id: string;
};

export class HorarioAulaService implements InterfaceCrud<HorarioAulasModel> {
  db: any;

  constructor(db: any) {
    this.db = db;
  }

  async getAll(): Promise<HorarioAulasModel[]> {
    const result = await this.db.query('SELECT * FROM horario_aulas');
    return result.rows;
  }

  async find(id: string): Promise<HorarioAulasModel> {
    throw new Error('Method not implemented.');
  }

  async create(payload: HorarioAulasModel): Promise<HorarioAulasModel> {
    throw new Error('Method not implemented.');
  }

  async update(
    id: string,
    payload: HorarioAulasModel
  ): Promise<HorarioAulasModel> {
    throw new Error('Method not implemented.');
  }
}
