let inputNome = document.getElementById('nome');
let inputSobrenome = document.getElementById('snome');
let inputCpf = document.getElementById('cpf');

let dadosCorretos = document.getElementById('dados-corretos');
let dadosIncorretos = document.getElementById('dados-incorretos');

let button = document.getElementById('btn');

button.onclick = function () {
    camposOk();
};

function validaCampos(nome, sobrenome, cpf) { // a
    if (nome !== ''
        && sobrenome !== ''
        && cpf !== '') {
        if (verificaCpf(inputCpf.value)) {
            alert('Todos os campos estão preenchidos!');
            alert('CPF Válido!');
            return true;
        } else {
            alert('Complete o CPF!');
        }
    } else {
        alert('Erro, preencha todos os campos!');
    }
}

function verificaCpf(cpf) { // b
    if (cpf.length == 11) {
        return true;
    } else {
        alert('CPF inválido!');
    }
}

let camposOk = function () { // c
    if (validaCampos(inputNome.value.trim(), inputSobrenome.value.trim(), inputCpf.value.trim())
        && verificaCpf(inputCpf.value)) {
        dadosIncorretos.setAttribute('hidden', 'hidden'); // adc hidden no incorreto
        dadosCorretos.removeAttribute('hidden'); // remove o hidden do correto
    } else {
        dadosCorretos.setAttribute('hidden', 'hidden'); // adc hidden no correto
        dadosIncorretos.removeAttribute('hidden'); // remove hidden do incorreto
    }
}
