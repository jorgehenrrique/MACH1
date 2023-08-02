"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const dataHendler_1 = require("./dataHandler/dataHendler");
const typeChecker_1 = __importDefault(require("./utils/typeChecker"));
const app = (0, express_1.default)();
const port = 3333; // Porta do server
// Utilize express.json() para fazer o parse do corpo da requisição.
app.use(express_1.default.json());
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
    const dados = (0, dataHendler_1.lerArquivo)(); // Lendo o arquivo data.json
    if (dados.length > 0) {
        res.json(dados); // retorna dados
    }
    else {
        res.status(404).send('Sem dados no endereco');
    }
});
// Listar dado por id/url parameters
app.get('/product/:id', (req, res) => {
    const dados = (0, dataHendler_1.lerArquivo)(); // Lendo arquivo data.json
    const currentData = dados.find((prod) => prod.id === req.params.id);
    if (currentData) {
        console.log(`Produto do id listado: ${req.params.id}`);
        res.json(currentData);
    }
    else {
        res.status(404).send(`Não ha dados para o id: ${req.params.id}`);
    }
});
// Adicionar dados
app.post('/product/add', (req, res) => {
    const { productName, productDescription, productCategory, productCost, productTags, productRelated, } = req.body;
    if (!productName || !productDescription || !productCategory || !productCost) {
        return res.status(400).send('Dados incompletos. Preencha todos os campos.');
    }
    (0, typeChecker_1.default)(res, req.body);
    if ((0, typeChecker_1.default)(res, req.body)) {
        return;
    }
    const newProduct = {
        id: (0, uuid_1.v4)(),
        productName,
        productDescription,
        productCategory,
        productCost,
        productTags,
        productRelated,
    };
    const dados = (0, dataHendler_1.lerArquivo)();
    dados.push(newProduct);
    (0, dataHendler_1.escreverArquivo)(dados);
    res.status(201).send('Produto adicionado com sucesso.');
});
// Editar dados
app.put('/product/edit/:id', (req, res) => {
    let dados = (0, dataHendler_1.lerArquivo)(); // ler os dados salvos
    const dataIndex = dados.findIndex((prod) => prod.id === req.params.id);
    const { id, productName, productDescription, productCategory, productCost, productTags, productRelated, } = req.body;
    (0, typeChecker_1.default)(res, req.body);
    if ((0, typeChecker_1.default)(res, req.body)) {
        return;
    }
    if (dataIndex !== -1) {
        const payload = {
            id: dados[dataIndex].id,
            productName: productName || dados[dataIndex].productName,
            productDescription: productDescription || dados[dataIndex].productDescription,
            productCategory: productCategory || dados[dataIndex].productCategory,
            productCost: productCost || dados[dataIndex].productCost,
            productTags: productTags || dados[dataIndex].productTags,
            productRelated: productRelated || dados[dataIndex].productRelated,
        };
        dados[dataIndex] = payload;
        // res.json(dados[dataIndex]);
        (0, dataHendler_1.escreverArquivo)(dados);
        res.status(200).send('Dado atualizado com sucesso');
    }
    else {
        res.status(404).send('Dado não encontrado');
    }
});
// Deletar dado
app.delete('/product/:id', (req, res) => {
    let dados = (0, dataHendler_1.lerArquivo)(); // Lendo arquivo data.json
    const currentData = dados.find((user) => user.id === req.params.id);
    if (currentData) {
        console.log(`Produto do id deletado: ${req.params.id}`);
        // res.json(currentData);
    }
    else {
        res.status(404).send(`Não ha dados com o id: ${req.params.id}`);
    }
    // Deleta aqui, retornando apenas os ids diferentes do recebido
    dados = dados.filter((prod) => prod.id !== req.params.id);
    (0, dataHendler_1.escreverArquivo)(dados);
    res.status(200).send('Deletado com sucesso');
});
