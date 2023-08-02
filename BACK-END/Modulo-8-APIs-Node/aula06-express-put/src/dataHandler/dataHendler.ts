import Product from '../types/types';
import fs from 'fs';
import path from 'path';
const dataPath = path.resolve(__dirname, '..', 'data', 'data.json');

// Ler o conteúdo do arquivo data.json
export function lerArquivo(): Product[] {
  try {
    const conteudo: string = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(conteudo);
  } catch (erro) {
    console.error('Erro ao ler o arquivo:');
    return [];
  }
}

// Escrever o conteúdo atualizado no arquivo data.json
export function escreverArquivo(conteudo: Product[]): void {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(conteudo, null, 2));
    console.log('Arquivo data.json atualizado com sucesso!');
  } catch (erro) {
    console.error('Erro ao escrever no arquivo:');
  }
}
