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

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
  res.status(404).send({ message: 'Link inexistente!' });
});
