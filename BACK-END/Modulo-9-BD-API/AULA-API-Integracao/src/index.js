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
const app = express();
const port = 3000;

app.use(express.json());
app.listen(port, () => {
  console.log('Server rodando port: ' + port);
});

// CRUD - CREATE READ UPDATE DELETE

// READ
// GET: http://localhost:3000/pessoas
app.get('/pessoas', pessoasList);

// GET: http://localhost:3000/pessoas/2
app.get('/pessoas/:id', pessoasListId);

// CREATE
// POST: http://localhost:3000/pessoas
app.post('/pessoas', pessoasAdd);

// ----------------------------------------------------------------

// GET: http://localhost:3000/modalidades
app.get('/modalidades', modalidadesList);

// GET: http://localhost:3000/modalidades/2
app.get('/modalidades/:id', modalidadesListId);

// POST: http://localhost:3000/modalidades
app.post('/modalidades', modalidadesAdd);

// ----------------------------------------------------------------
