import express from 'express';
import * as pessoas from './controllers/handlePessoas';
import * as modalidades from './controllers/handleModalidades';
import * as planos from './controllers/handlePlanos';
import * as modalidadesPlanos from './controllers/handleModalidadesPlanos';
import * as horariosAulas from './controllers/handleHorariosAulas';
import * as matriculas from './controllers/handleMatriculas';
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
app.get('/pessoas', pessoas.pessoasList);

// GET: http://localhost:3000/pessoas/:id
app.get('/pessoas/:id', pessoas.pessoasListId);

// CREATE
// POST: http://localhost:3000/pessoas
app.post('/pessoas', pessoas.pessoasAdd);

// UPDATE
// PUT: http://localhost:3000/pessoas/:id
app.put('/pessoas/:id', pessoas.pessoasUpdate);

// ----------------------------------------------------------------

// GET: http://localhost:3000/modalidades
app.get('/modalidades', modalidades.modalidadesList);

// GET: http://localhost:3000/modalidades/:id
app.get('/modalidades/:id', modalidades.modalidadesListId);

// POST: http://localhost:3000/modalidades
app.post('/modalidades', modalidades.modalidadesAdd);

// PUT: http://localhost:3000/modalidades/:id
app.put('/modalidades/:id', modalidades.modalidadesUpdate);

// ----------------------------------------------------------------

// GET: http://localhost:3000/planos
app.get('/planos', planos.planosList);

// GET: http://localhost:3000/planos/:id
app.get('/planos/:id', planos.planosListId);

// POST: http://localhost:3000/planos
app.post('/planos/', planos.planosAdd);

// PUT: http://localhost:3000/planos/:id
app.put('/planos/:id', planos.planosUpdate);

// ----------------------------------------------------------------

// GET: http://localhost:3000/modalidadesplanos
app.get('/modalidadesplanos', modalidadesPlanos.modalidadesPlanosList);

// GET: http://localhost:3000/modalidadesplanos/:id
app.get('/modalidadesplanos/:id', modalidadesPlanos.modalidadesPlanosListId);

// POST: http://localhost:3000/modalidadesplanos
app.post('/modalidadesplanos/', modalidadesPlanos.modalidadesPlanosAdd);

// ----------------------------------------------------------------

// GET: http://localhost:3000/horarioaulas
app.get('/horarioaulas', horariosAulas.horariosAulasList);

// GET: http://localhost:3000/horarioaulas/:id
app.get('/horarioaulas/:id', horariosAulas.horariosAulasListId);

// POST: http://localhost:3000/horarioaulas
app.post('/horarioaulas/', horariosAulas.horariosAulasAdd);

// ----------------------------------------------------------------

// GET: http://localhost:3000/matriculas
app.get('/matriculas', matriculas.matriculasList);

// GET: http://localhost:3000/matriculas/:id
app.get('/matriculas/:id', matriculas.matriculasListId);

// POST: http://localhost:3000/matriculas
app.post('/matriculas/', matriculas.matriculasAdd);

// ----------------------------------------------------------------

// Resposta padrão para quaisquer outras requisições:
app.use((_: any, res: any) => {
  res.status(404).send({ message: 'Link inexistente!' });
});
