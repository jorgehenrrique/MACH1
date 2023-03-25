// || Inputs
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputTel = document.querySelector('#tel');

// || Botoes
const btnSalvar = document.querySelector('.btn');
const btnConcluir = document.querySelector('.btn-concluir');
const btnVoltar = document.querySelector('.btn-voltar');

const formulario = document.querySelector('form'); // Formulario para reset()
const div = document.querySelector('.preenchidos'); // div para listar clientes

let listaCadastro = [];

btnSalvar.addEventListener('click', validaCadastro); // Chama a funcao de validar

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

btnConcluir.addEventListener('click', function () {
    if (listaCadastro.length > 0) { // Se já contem algum cliente salvo
        criaListaCadastrados();
        exibeCadastrados();
    } else {
        document.querySelector('.cadastro').removeAttribute('hidden');
        document.querySelector('.erro').setAttribute('hidden', '');
    }
});

setInterval(function() {
    limpaTela();
}, 9000);

function exibeCadastrados() {
    document.querySelector('.pagina-inicial').style.display = 'none';
    document.querySelector('.pagina-final').removeAttribute('hidden');
}

btnVoltar.addEventListener('click', function () {
    document.querySelector('.pagina-inicial').style.display = 'block';
    document.querySelector('.pagina-final').setAttribute('hidden', '');
    limpaTela();
});

let limpaTela = function () { // Limpa mensagens ao voltar para inicio
    document.querySelector('.erro').setAttribute('hidden', ''); //Preencher todos os campos!
    document.querySelector('.sucesso').setAttribute('hidden', ''); //Cadastro salvo!
    document.querySelector('.cadastro').setAttribute('hidden', ''); //Primeiro salve um cadastro!
};

let exibeMensagemSucesso = () => {
    document.querySelector('.cadastro').setAttribute('hidden', '');
    document.querySelector('.erro').setAttribute('hidden', '');
    document.querySelector('.sucesso').removeAttribute('hidden');
}

let exibeMensagemErro = () => {
    document.querySelector('.cadastro').setAttribute('hidden', '');
    document.querySelector('.sucesso').setAttribute('hidden', '');
    document.querySelector('.erro').removeAttribute('hidden');
}

function salvaCadastro() { // Cria um objeto cadastro, e salva no array
    const cadastro = {
        nome: inputNome.value,
        email: inputEmail.value,
        telefone: inputTel.value
    };

    listaCadastro.push(cadastro); // Adc obj no array
}

function criaListaCadastrados() { // Cria lista de cadastro
    div.innerHTML = '';
    let i = 1;
    for (let cliente of listaCadastro) {
        div.innerHTML += `<hr><ul>Cliente: ${i}
        <li>Nome: ${cliente.nome}</li>
        <li>Email: ${cliente.email}</li>
        <li>Telefone: ${cliente.telefone}</li>
        </ul>`;
        i++;
    }
}
