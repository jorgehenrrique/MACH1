const express = require('express');
const app = express();
const port = 3333;
import dados from './data/data';

// Rodando server na porta 3333
app.listen(port, () => {
  console.log('Server ativo no endereco e porta: http://localhost:3333');
});

// Raiz do endereco
app.get('/', (req: any, res: any) => {
  console.log('Acesso a raiz.');

  if (dados) {
    res.json(dados); // imprime dados
  } else {
    res.status(404).send('Sem dados no endereco');
  }
});
