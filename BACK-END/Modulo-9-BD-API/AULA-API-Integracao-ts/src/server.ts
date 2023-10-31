import express from 'express';
import {
  pessoasList,
  pessoasListId,
  pessoasAdd,
} from './controllers/handlePessoas';
import {
  modalidadesList,
  modalidadesListId,
  modalidadesAdd,
} from './controllers/handleModalidades';
import {
  planosList,
  planosListId,
  planosAdd,
} from './controllers/handlePlanos';
import {
  ModalidadesPlanosList,
  ModalidadesPlanosListId,
  ModalidadesPlanosAdd,
} from './controllers/handleModalidadesPlanos';
import {
  horariosAulasList,
  horariosAulasListId,
  horariosAulasAdd,
} from './controllers/handleHorariosAulas';
import {
  matriculasList,
  matriculasListId,
  matriculasAdd,
} from './controllers/handleMatriculas';
const app = express();
const port = 3000;

app.use(express.json());

// Inicia o sevidor
app.listen(port, () => {
  console.log('Server ok port: ' + port);
});

// CRUD - CREATE READ UPDATE DELETE

// READ
// GET: http://localhost:3000/pessoas
app.get('/pessoas', pessoasList);

// GET: http://localhost:3000/pessoas/:id
app.get('/pessoas/:id', pessoasListId);

// CREATE
// POST: http://localhost:3000/pessoas
app.post('/pessoas', pessoasAdd);

// ----------------------------------------------------------------

// GET: http://localhost:3000/modalidades
app.get('/modalidades', modalidadesList);

// GET: http://localhost:3000/modalidades/:id
app.get('/modalidades/:id', modalidadesListId);

// POST: http://localhost:3000/modalidades
app.post('/modalidades', modalidadesAdd);

// ----------------------------------------------------------------

// GET: http://localhost:3000/planos
app.get('/planos', planosList);

// GET: http://localhost:3000/planos/:id
app.get('/planos/:id', planosListId);

// POST: http://localhost:3000/planos
app.post('/planos/', planosAdd);

// ----------------------------------------------------------------

// GET: http://localhost:3000/modalidadesplanos
app.get('/modalidadesplanos', ModalidadesPlanosList);

// GET: http://localhost:3000/modalidadesplanos/:id
app.get('/modalidadesplanos/:id', ModalidadesPlanosListId);

// POST: http://localhost:3000/modalidadesplanos
app.post('/modalidadesplanos/', ModalidadesPlanosAdd);

// ----------------------------------------------------------------

// GET: http://localhost:3000/horarioaulas
app.get('/horarioaulas', horariosAulasList);

// GET: http://localhost:3000/horarioaulas/:id
app.get('/horarioaulas/:id', horariosAulasListId);

// POST: http://localhost:3000/horarioaulas
app.post('/horarioaulas/', horariosAulasAdd);

// ----------------------------------------------------------------

// GET: http://localhost:3000/matriculas
app.get('/matriculas', matriculasList);

// GET: http://localhost:3000/matriculas/:id
app.get('/matriculas/:id', matriculasListId);

// POST: http://localhost:3000/matriculas
app.post('/matriculas/', matriculasAdd);

// ----------------------------------------------------------------

// Resposta padrão para quaisquer outras requisições:
app.use((_: any, res: any) => {
  res.status(404).send({ message: 'Link inexistente!' });
});
