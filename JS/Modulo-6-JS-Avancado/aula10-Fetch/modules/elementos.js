// Cadastro
const cadastroMatricula = document.querySelector('#matricula');
const cadastroNome = document.querySelector('#nome');
const btnCadastrar = document.querySelector('input[value="Cadastrar"]');

// Consulta
const inputMatricula = document.querySelector('#matricula');
const printNome = document.querySelector('#matricula-aluno');
const printMatricula = document.querySelector('#nome-aluno');
const btnBuscarMatricula = document.querySelector('#btnBuscarMatricula');
const inputBuscarNome = document.querySelector('#nome');
const btnBuscar = document.querySelector('#btnBuscar');

export const printDados = document.querySelector('#dados');
export const divDados = document.querySelector('#div-dados');

export const loaderConsulta = document.querySelector('.loader-consulta');
export const loaderCadastro = document.querySelector('.loader-cadastro');

export { cadastroMatricula, cadastroNome, btnCadastrar }
export { inputMatricula, printNome, printMatricula, btnBuscarMatricula, inputBuscarNome, btnBuscar }