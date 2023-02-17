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

let listaCadastro = [];

btnSalvar.addEventListener('click', validaCadastro);

btnConcluir.addEventListener('click', function () {
    if (listaCadastro[0].nome) {
        clientesCadastrados();
        exibeCadastrados();
    } else {
        // document.querySelector('.cadastro').removeAttribute('hidden');
    }
});

function exibeCadastrados() {
    document.querySelector('.pagina-inicial').style.display = 'none';
    document.querySelector('.pagina-final').removeAttribute('hidden');
}

btnVoltar.addEventListener('click', function () {
    document.querySelector('.pagina-inicial').style.display = 'block';
    document.querySelector('.pagina-final').setAttribute('hidden', '');
    limpaTela();
});

let limpaTela = function() {
    document.querySelector('.erro').setAttribute('hidden', '');
    document.querySelector('.sucesso').setAttribute('hidden', '');
    // document.querySelector('.cadastro').setAttribute('hidden', '');
};

function validaCadastro() {
    if (inputNome.value.trim() !== ''
        && inputEmail.value.trim() !== ''
        && inputTel.value.trim() !== '') {
        exibeMensagemSucesso();
        salvaCadastro();
        formulario.reset();
    } else {
        exibeMensagemErro();
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
    const cadastro = {
        nome: inputNome.value,
        email: inputEmail.value,
        telefone: inputTel.value
    };

    listaCadastro.push(cadastro);
}

function clientesCadastrados() {
    div.innerHTML = '';
    let i = 1;
    for (let dado of listaCadastro) {
        div.innerHTML += `<hr><ul>Cliente: ${i}
        <li>${dado.nome}</li>
        <li>${dado.email}</li>
        <li>${dado.telefone}</li>
        </ul>`;
        i++;
    }
}
