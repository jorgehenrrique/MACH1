import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import Users from './types/types';
import { lerArquivo, escreverArquivo } from './dataHandler/dataHendler';
import jwt from 'jsonwebtoken';
import auth from './middlewares/auth';
import dotenv from 'dotenv';
dotenv.config();

const secretKey: string = process.env.SECRET_KEY || ''; // key do arquivo .env

const app = express();
const port = 3333;

app.use(express.json());

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

  const newUser: Users = {
    id: uuidv4(),
    name,
    password,
  };

  const dados: Users[] = lerArquivo();
  dados.push(newUser);

  escreverArquivo(dados);
  console.log('Usuario criado');
  res.status(201).send('Usuario adicionado com sucesso.');
});

// Logar usuario
// POST: 127.0.0.1:3333/login
app.post('/login', (req, res) => {
  const { name, password } = req.body;

  const dados: Users[] = lerArquivo();
  const currentUser = dados.find(
    (user) => user.name === name && user.password === password
  ); // Verifica se á um usuario local igual ao recebido

  if (currentUser)
    if (name === currentUser.name && password === currentUser.password) {
      const token = jwt.sign({ name, password }, secretKey, {
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
app.get('/users', auth, (req, res) => {
  // Passa pelo auth para mostrar usuarios

  const dados: Users[] = lerArquivo(); // Lendo o arquivo data.json

  if (dados.length > 0) {
    const users: { id: string; name: string }[] = [];
    for (const user of dados) {
      const { id, name } = user;
      users.push({ id, name });
    }
    res.json(users); // retorna usuarios
    console.log('Usuarios listados');
  } else {
    res.status(404).send('Sem usuarios cadastrados.');
  }
});

// Listar usuario por id/url parameters
// GET: 127.0.0.1:3333/user/04108e66-4a13-4bed-b315-533250b5bfaa
app.get('/user/:id', auth, (req, res) => {
  // Passa pelo auth para mostrar usuario
  const dados: Users[] = lerArquivo();

  const currentUser = dados.find((user) => user.id === req.params.id);

  if (currentUser) {
    const user: { id: string; name: string } = {
      id: currentUser.id,
      name: currentUser.name,
    };
    res.json(user);
    console.log(`Usuario do id listado: ${req.params.id}`);
  } else {
    res.status(404).send(`Não ha dados para o id: ${req.params.id}`);
  }
});
