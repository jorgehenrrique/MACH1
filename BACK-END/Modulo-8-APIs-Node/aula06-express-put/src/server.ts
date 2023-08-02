import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import Product from './types/types';
import { lerArquivo, escreverArquivo } from './dataHandler/dataHendler';
import checkData from './utils/typeChecker';

const app = express();
const port = 3333; // Porta do server

// Utilize express.json() para fazer o parse do corpo da requisição.
app.use(express.json());

app.listen(port, () => {
  console.log('Server ativo: http://localhost:3333');
});

// Raiz do endereco
app.get('/', (req, res) => {
  res.send(`
  <h1>Bem vindo(a)!</h1>
  <br>
  <div>
  <a href="/product">Listar dados:</a> <br>
  </div>`);
});

// Listar dados
app.get('/product', (req, res) => {
  console.log('Produtos listados');

  const dados: Product[] = lerArquivo(); // Lendo o arquivo data.json

  if (dados.length > 0) {
    res.json(dados); // retorna dados
  } else {
    res.status(404).send('Sem dados no endereco');
  }
});

// Listar dado por id/url parameters
app.get('/product/:id', (req, res) => {
  const dados: Product[] = lerArquivo();

  const currentData = dados.find((prod) => prod.id === req.params.id);

  if (currentData) {
    console.log(`Produto do id listado: ${req.params.id}`);
    res.json(currentData);
  } else {
    res.status(404).send(`Não ha dados para o id: ${req.params.id}`);
  }
});

// Adicionar dados
app.post('/product/add', (req, res) => {
  const {
    productName,
    productDescription,
    productCategory,
    productCost,
    productTags,
    productRelated,
  } = req.body;

  if (!productName || !productDescription || !productCategory || !productCost) {
    return res.status(400).send('Dados incompletos. Preencha todos os campos.');
  }

  checkData(res, req.body);
  if (checkData(res, req.body)) {
    return;
  }

  const newProduct: Product = {
    id: uuidv4(),
    productName,
    productDescription,
    productCategory,
    productCost,
    productTags,
    productRelated,
  };

  const dados: Product[] = lerArquivo();
  dados.push(newProduct);

  escreverArquivo(dados);
  res.status(201).send('Produto adicionado com sucesso.');
});

// Editar dados
app.put('/product/edit/:id', (req, res) => {
  let dados: Product[] = lerArquivo();

  const dataIndex = dados.findIndex((prod) => prod.id === req.params.id);

  const {
    id,
    productName,
    productDescription,
    productCategory,
    productCost,
    productTags,
    productRelated,
  } = req.body;

  checkData(res, req.body);
  if (checkData(res, req.body)) {
    return;
  }

  if (dataIndex !== -1) {
    const payload: Product = {
      id: dados[dataIndex].id,
      productName: productName || dados[dataIndex].productName,
      productDescription:
        productDescription || dados[dataIndex].productDescription,
      productCategory: productCategory || dados[dataIndex].productCategory,
      productCost: productCost || dados[dataIndex].productCost,
      productTags: productTags || dados[dataIndex].productTags,
      productRelated: productRelated || dados[dataIndex].productRelated,
    };

    dados[dataIndex] = payload;
    // res.json(dados[dataIndex]);
    escreverArquivo(dados);
    res.status(200).send('Dado atualizado com sucesso');
  } else {
    res.status(404).send('Dado não encontrado');
  }
});

// Deletar dado
app.delete('/product/:id', (req, res) => {
  let dados: Product[] = lerArquivo();

  const currentData = dados.find((user) => user.id === req.params.id);

  if (currentData) {
    console.log(`Produto do id deletado: ${req.params.id}`);
    // res.json(currentData);
  } else {
    res.status(404).send(`Não ha dados com o id: ${req.params.id}`);
  }

  // Deleta aqui, retornando apenas os ids diferentes do recebido
  dados = dados.filter((prod) => prod.id !== req.params.id);
  escreverArquivo(dados);
  res.status(200).send('Deletado com sucesso');
});
