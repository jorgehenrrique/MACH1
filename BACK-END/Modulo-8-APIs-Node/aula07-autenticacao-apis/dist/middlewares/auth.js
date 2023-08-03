"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataHendler_1 = require("../dataHandler/dataHendler");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secretKey = process.env.SECRET_KEY || '';
function auth(req, res, next) {
    const dados = (0, dataHendler_1.lerArquivo)();
    const { authorization } = req.headers; // Recebe o token
    try {
        // Recebe o token pelo headers, e decodifica utilizando a secretkey
        const decodedToken = jsonwebtoken_1.default.verify(authorization, secretKey);
        // Verifica user salvo com user do token, para comparar credenciais
        const idx = dados.findIndex((user) => user.name === decodedToken.name);
        if (decodedToken.name === dados[idx].name &&
            decodedToken.password === dados[idx].password) {
            next(); // retorna para o app do server
        }
    }
    catch (error) {
        console.log(error.message);
        return res.status(401).send('Usuario não autoriado.');
    }
}
exports.default = auth;
