"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3333;
const data_1 = __importDefault(require("./data/data"));
// Rodando server na porta 3333
app.listen(port, () => {
    console.log('Server ativo no endereco e porta: http://localhost:3333');
});
// Raiz do endereco
app.get('/', (req, res) => {
    console.log('Acesso a raiz.');
    if (data_1.default) {
        res.json(data_1.default); // imprime dados
    }
    else {
        res.status(404).send('Sem dados no endereco');
    }
});
