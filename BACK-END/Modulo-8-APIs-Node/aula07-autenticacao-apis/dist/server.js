"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const dataHendler_1 = require("./dataHandler/dataHendler");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = __importDefault(require("./middlewares/auth"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secretKey = process.env.SECRET_KEY || ''; // key do arquivo .env
const app = (0, express_1.default)();
const port = 3333;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log('Server ativo: http://localhost:3333');
});
// Raiz do endereco
// GET: 127.0.0.1:3333
app.get('/', (req, res) => {
    res.send(`
  <h1>Bem vindo(a)!</h1>
  <br>
  <div>
  <a href="/users">Listar Usuarios:</a> <br>
  </div>`);
});
// Adicionar usuarios
// POST: 127.0.0.1:3333/user/add
app.post('/user/add', (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).send('Dados incompletos. Preencha todos os campos.');
    }
    const newUser = {
        id: (0, uuid_1.v4)(),
        name,
        password,
    };
    const dados = (0, dataHendler_1.lerArquivo)();
    dados.push(newUser);
    (0, dataHendler_1.escreverArquivo)(dados);
    console.log('Usuario criado');
    res.status(201).send('Usuario adicionado com sucesso.');
});
// Logar usuario
// POST: 127.0.0.1:3333/login
app.post('/login', (req, res) => {
    const { name, password } = req.body;
    const dados = (0, dataHendler_1.lerArquivo)();
    const currentUser = dados.find((user) => user.name === name && user.password === password); // Verifica se á um usuario local igual ao recebido
    if (currentUser)
        if (name === currentUser.name && password === currentUser.password) {
            const token = jsonwebtoken_1.default.sign({ name, password }, secretKey, {
                expiresIn: '1hour',
            });
            // Verifica credenciais, depois gera e retorna um token
            console.log('Usuario logado');
            return res.json({ token });
        }
    res.status(401).send('Usuário ou senha inválidos');
});
// Listar dados
// GET: 127.0.0.1:3333/users
app.get('/users', auth_1.default, (req, res) => {
    // Passa pelo auth para mostrar usuarios
    const dados = (0, dataHendler_1.lerArquivo)(); // Lendo o arquivo data.json
    if (dados.length > 0) {
        const users = [];
        for (const user of dados) {
            const { id, name } = user;
            users.push({ id, name });
        }
        res.json(users); // retorna usuarios
        console.log('Usuarios listados');
    }
    else {
        res.status(404).send('Sem usuarios cadastrados.');
    }
});
// Listar usuario por id/url parameters
// GET: 127.0.0.1:3333/user/04108e66-4a13-4bed-b315-533250b5bfaa
app.get('/user/:id', auth_1.default, (req, res) => {
    // Passa pelo auth para mostrar usuario
    const dados = (0, dataHendler_1.lerArquivo)();
    const currentUser = dados.find((user) => user.id === req.params.id);
    if (currentUser) {
        const user = {
            id: currentUser.id,
            name: currentUser.name,
        };
        res.json(user);
        console.log(`Usuario do id listado: ${req.params.id}`);
    }
    else {
        res.status(404).send(`Não ha dados para o id: ${req.params.id}`);
    }
});
