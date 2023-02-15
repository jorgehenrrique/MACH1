let inputNome = document.getElementById('nome');
let inputSobrenome = document.getElementById('snome');
let inputCpf = document.getElementById('cpf');

let button = document.getElementById('btn');

// a
let cont = 0;
button.onclick = function () {
    // console.log(inputNome.value);
    // console.log(inputSobrenome.value);
    // console.log(inputCpf.value);
    if (inputNome.value !== '' &&
        inputSobrenome.value !== '' &&
        inputCpf.value !== '') {
        console.log('Todos campos estão preenchidos!');
        cont++;
    } else {
        console.log('Erro, preencha todos os campos!');
    }

    // b
    let cpf = inputCpf.value;
    if (cpf.length == 11){
        console.log('CPF Válido', cpf);
        cont++;
    } else {
        console.log('CPF inválido');
    }

    // c

}

let camposOk = (x) => {
    let msg = (x === 2) ? 'Dados enviados com sucesso!' : 'Erro!';
    console.log(msg);
}
camposOk(cont);