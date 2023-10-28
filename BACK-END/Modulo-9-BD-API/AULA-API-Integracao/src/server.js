const express = require('express');
const {
  pessoasList,
  pessoasListId,
  pessoasAdd,
} = require('./controllers/handlePessoas');
const {
  modalidadesList,
  modalidadesListId,
  modalidadesAdd,
} = require('./controllers/handleModalidades');
const {
  planosList,
  planosListId,
  planosAdd,
} = require('./controllers/handlePlanos');
const {
  ModalidadesPlanosList,
  ModalidadesPlanosListId,
  ModalidadesPlanosAdd,
} = require('./controllers/handleModalidadesPlanos');
const {
  horariosAulasList,
  horariosAulasListId,
  horariosAulasAdd,
} = require('./controllers/handleHorariosAulas');
const {
  matriculasList,
  matriculasListId,
  matriculasAdd,
} = require('./controllers/handleMatriculas');
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
app.use((req, res) => {
  res.status(404).send({ message: 'Link inexistente!' });
});
