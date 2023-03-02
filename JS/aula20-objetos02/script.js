const inputValor = document.querySelector('#numero');
const btnAdicionaCalcula = document.querySelector('#calcular');
const btnLimpar = document.querySelector('#limpar');
const saidaValor = document.querySelector('#resultado');

let arrValores = [];

btnAdicionaCalcula.addEventListener('click', function () {
    if (inputValor.value.trim() !== '') {
        // arrValores.push(Number(inputValor.value)); // nao precisa converter para number
        arrValores.push(inputValor.value);
        somaValores();
    } else {
        alert('Preencher com numeros!')
    }
});

function somaValores() {

    limpaTudo();

    arrValores.map(valor => {
        saidaValor.innerHTML += `${valor * 3}, `;
    })
}

btnLimpar.addEventListener('click', function() {
    arrValores = [];
    limpaTudo();
})

let limpaTudo = () => {
    inputValor.value = '';
    saidaValor.innerHTML = '';
    inputValor.focus();
};