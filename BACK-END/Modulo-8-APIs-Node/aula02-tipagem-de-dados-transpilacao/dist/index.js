"use strict";
const inputData = require("prompt-sync")();
const pessoas = [];
function qtdEntrada() {
    const qtdDados = inputData("Deseja inserir dados de quantas pessoas? ");
    return qtdDados;
}
const qtd = qtdEntrada();
function entradaDados() {
    console.log("Informe os dados:");
    const nome = inputData("Seu nome:");
    const email = inputData("Seu email:");
    const idade = inputData("Sua idade:");
    const sexo = inputData("Seu sexo:");
    // Criando um obj para cada pessoa
    const novaPessoa = {
        nome: nome,
        email: email,
        idade: idade,
        sexo: sexo,
    };
    // Add o novo obj ao arr pessoas
    pessoas.push(novaPessoa);
}
for (let i = 0; i < qtd; i++) {
    entradaDados();
}
// Exibe posisao e nome
function exibeLista() {
    if (pessoas.length > 0)
        console.log("Lista de dados:");
    pessoas.forEach((pessoa, idx) => {
        console.log("posisao:", idx + 1, "nome:", pessoa.nome);
    });
}
exibeLista();
