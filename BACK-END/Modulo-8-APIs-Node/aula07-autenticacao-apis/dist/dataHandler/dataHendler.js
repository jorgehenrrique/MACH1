"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.escreverArquivo = exports.lerArquivo = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dataPath = path_1.default.resolve(__dirname, '..', 'data', 'data.json');
// Ler o conteúdo do arquivo data.json
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
exports.lerArquivo = lerArquivo;
// Escrever o conteúdo atualizado no arquivo data.json
function escreverArquivo(conteudo) {
    try {
        fs_1.default.writeFileSync(dataPath, JSON.stringify(conteudo, null, 2));
        console.log('Arquivo data.json atualizado com sucesso!');
    }
    catch (erro) {
        console.error('Erro ao escrever no arquivo:');
    }
}
exports.escreverArquivo = escreverArquivo;
