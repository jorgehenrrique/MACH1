import { lerArquivo } from '../dataHandler/dataHendler';
import Users from '../types/types';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secretKey: string = process.env.SECRET_KEY || '';

export default function auth(req: any, res: any, next: any) {
  const dados: Users[] = lerArquivo();

  const { authorization } = req.headers; // Recebe o token

  try {
    // Recebe o token pelo headers, e decodifica utilizando a secretkey
    const decodedToken: any = jwt.verify(authorization, secretKey);

    // Verifica user salvo com user do token, para comparar credenciais
    const idx = dados.findIndex((user) => user.name === decodedToken.name);

    if (
      decodedToken.name === dados[idx].name &&
      decodedToken.password === dados[idx].password
    ) {
      next(); // retorna para o app do server
    }
  } catch (error: any) {
    console.log(error.message);
    return res.status(401).send('Usuario não autoriado.');
  }
}
