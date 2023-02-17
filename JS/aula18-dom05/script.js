// || Inputs
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputTel = document.querySelector('#tel');

// || Botoes
const btnSalvar = document.querySelector('.btn');
const btnConcluir = document.querySelector('.btn-concluir');
const btnVoltar = document.querySelector('.btn-voltar');

const formulario = document.querySelector('form');
const div = document.querySelector('.preenchidos');

btnSalvar.addEventListener('click', validaCadastro);

const cadastro = {
    nome: '',
    email: '',
    telefone: '',
};

let listaCadastro = [];

btnConcluir.addEventListener('click', function () {
    if (listaCadastro !== [0]) {
        exibeCadastrados();
    }
});

function exibeCadastrados() {
    document.querySelector('.pagina-inicial').style.display = 'none';
    document.querySelector('.pagina-final').removeAttribute('hidden');
}

btnVoltar.addEventListener('click', function () {
    document.querySelector('.pagina-inicial').style.display = 'block';
    document.querySelector('.pagina-final').setAttribute('hidden', '');
    document.querySelector('.erro').setAttribute('hidden', '');
    document.querySelector('.sucesso').setAttribute('hidden', '');
});

function validaCadastro() {
    if (inputNome.value.trim() !== ''
        && inputEmail.value.trim() !== ''
        && inputTel.value.trim() !== '') {
        exibeMensagemSucesso();
        salvaCadastro();
        formulario.reset();
        console.log(listaCadastro)
        console.log(listaCadastro.nome)
    } else {
        exibeMensagemErro();
        console.log(listaCadastro.nome)
        console.log(listaCadastro)

    }
}

let exibeMensagemSucesso = () => {
    document.querySelector('.sucesso').removeAttribute('hidden');
    document.querySelector('.erro').setAttribute('hidden', '');
}

let exibeMensagemErro = () => {
    document.querySelector('.erro').removeAttribute('hidden');
    document.querySelector('.sucesso').setAttribute('hidden', '');
}

function salvaCadastro() {
    let cadastroCriado = { ...cadastro};
    cadastroCriado.nome = inputNome.value;
    cadastroCriado.email = inputEmail.value;
    cadastroCriado.telefone = inputTel.value;

    listaCadastro.push(cadastroCriado);

    clientesCadastrados();
}

function clientesCadastrados() {
    div.innerHTML = '';
    for (let cadastro of listaCadastro) {
        let i = 1;
        div.innerHTML += `<ul>Cadastro: ${i}
        <li>${cadastro.nome}</li>
        <li>${cadastro.email}</li>
        <li>${cadastro.telefone}</li>
        </ul>`;
        i++;
    }
}