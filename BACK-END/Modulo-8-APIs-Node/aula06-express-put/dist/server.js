"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path")); // Importe a biblioteca path para montar caminho absoluto
const app = (0, express_1.default)();
const port = 3333; // Porta do server
// Use path.resolve para obter o caminho absoluto do arquivo
const dataPath = path_1.default.resolve(__dirname, 'data', 'data.json');
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
  <a href="/list">Listar dados:</a> <br>
  <a href="/add">Adicionar dados:</a>
  </div>`);
});
// Listar usuarios
app.get('/list', (req, res) => {
    console.log('Página de usuarios');
    // Lendo, listando o arquivo data.json
    const dados = lerArquivo();
    if (dados.length > 0) {
        res.json(dados); // imprime dados
    }
    else {
        res.status(404).send('Sem dados no endereco');
    }
});
// Adicionar dados
app.post('/add', (req, res) => {
    const { productName, productDescription, productCategory, productCost, productTags, productRelated, } = req.body;
    if (!productName || !productDescription || !productCategory || !productCost) {
        return res.status(400).send('Dados incompletos. Preencha todos os campos.');
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
    const dados = lerArquivo();
    dados.push(newProduct);
    escreverArquivo(dados);
    res.status(201).send('Produto adicionado com sucesso.');
});
// Função para ler o conteúdo do arquivo data.json
function lerArquivo() {
    try {
        const conteudo = fs_1.default.readFileSync(dataPath, 'utf-8');
        return JSON.parse(conteudo);
    }
    catch (erro) {
        console.error('Erro ao ler o arquivo:');
        return [];
    }
}
console.log('ola');
// Função para escrever o conteúdo atualizado no arquivo data.json
function escreverArquivo(conteudo) {
    try {
        fs_1.default.writeFileSync(dataPath, JSON.stringify(conteudo, null, 2));
        console.log('Arquivo data.json atualizado com sucesso!');
    }
    catch (erro) {
        console.error('Erro ao escrever no arquivo:');
    }
}
