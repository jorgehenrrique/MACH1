const mensagem = document.querySelector('#message');
const inputNome = document.querySelector('#nome');
const inputIdade = document.querySelector('#idade');
const inputEnder = document.querySelector('#endereco');
const inputTell = document.querySelector('#telefone');
const btnSalvar = document.querySelector('#salvar');

const campos = [inputNome, inputIdade, inputEnder, inputTell];

btnSalvar.addEventListener('click', () => validaForm(campos));

function validaForm(campos) {
    return new Promise((resolve, reject) => {

        let camposInvalidos = [];
        let camposValidos = campos.filter((element) => {
            if (element.value.trim().length === 0) camposInvalidos.push(element);
            return element.value.trim().length > 0;
        })
        if (camposValidos.length === campos.length) {
            resolve();
        } else {
            reject(camposInvalidos);
        }

    }).then(() => {
        mensagem.innerHTML = `<p>Dados salvos com sucesso</p>`;
        setTimeout(() => mensagem.innerHTML = '', 5000);
    }).catch((campos) => {
        mensagem.innerHTML = '';
        campos.forEach(element => {
            mensagem.innerHTML += `<p>Campo ${element.name.toUpperCase()} é obrigatório</p>`
        });
    })
}
