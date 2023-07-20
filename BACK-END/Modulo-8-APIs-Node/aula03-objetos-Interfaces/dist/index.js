"use strict";
/*
Vamos fazer um algoritmo para cadastro de clientes, nele você deverá receber primeiramente o CPF do cliente, e se válido deverá coletar os demais dados como:
Nome,Idade,Estado Civil,Endereço, Cidade e Estado.


Para executar essa tarefa você deverá utilizar interface no typescript;

Considere válido CPF sem formatação (sem pontuação ou máscara) contendo 11 dígitos;

Caso o CPF seja inválido de um retorno adequado ao usuário que está preenchendo;

Os dados devem ser recebidos através do terminal.
*/
const inputData = require('prompt-sync')();
const pessoas = [];
inputDados();
function inputDados() {
    const cpf = inputData('Informe seu CPF, somente numeros:');
    if (cpf.length === 11) {
        const dadosPessoais = {
            cpf: cpf,
            nome: inputData('Informe seu Nome:'),
            idade: inputData('Informe sua Idade:'),
            estadoCivil: inputData('Informe o estado Civil:'),
            endereco: inputData('Informe seu Endereco:'),
            cidade: inputData('Informe sua Cidade:'),
            estado: inputData('Informe seu Estado:'),
        };
        pessoas.push(dadosPessoais);
    }
    else
        console.log('CPF inválido!');
}
if (pessoas.length > 0) {
    for (let pessoa of pessoas) {
        console.log(pessoa);
    }
}
else {
    console.log('Nenhum dado informado.');
}
