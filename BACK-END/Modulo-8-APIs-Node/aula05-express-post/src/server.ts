import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import User from './models/users';
import fs from 'fs';
import path from 'path'; // Importe a biblioteca path para montar caminho absoluto

const app = express();
const port = 3333; // Porta do server
// Use path.resolve para obter o caminho absoluto do arquivo
const dataPath = path.resolve(__dirname, 'data', 'data.json');

// Utilize express.json() para fazer o parse do corpo da requisição.
app.use(express.json());

app.listen(port, () => {
  console.log('Server ativo no endereco e porta: http://localhost:3333');
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
  const dados: User[] = lerArquivo();

  if (dados.length > 0) {
    res.json(dados); // imprime dados
  } else {
    res.status(404).send('Sem dados no endereco');
  }
});

// Adicionar dados
app.post('/add', (req, res) => {
  const { name, age, email, profile } = req.body;

  if (!name || !age || !email || !profile.type || !profile.credit) {
    return res.status(400).send('Dados incompletos. Preencha todos os campos.');
  }

  const newUser: User = {
    id: uuidv4(),
    name,
    age,
    email,
    profile,
  };

  const dados: User[] = lerArquivo();
  dados.push(newUser);

  escreverArquivo(dados);
  res.status(201).send('Usuário adicionado com sucesso.');
});

// Função para ler o conteúdo do arquivo data.json
function lerArquivo(): User[] {
  try {
    const conteudo: string = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(conteudo);
  } catch (erro) {
    console.error('Erro ao ler o arquivo:');
    return [];
  }
}

// Função para escrever o conteúdo atualizado no arquivo data.json
function escreverArquivo(conteudo: User[]): void {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(conteudo, null, 2));
    console.log('Arquivo data.json atualizado com sucesso!');
  } catch (erro) {
    console.error('Erro ao escrever no arquivo:');
  }
}
