const inputValor = document.querySelector('#numero');
const btnAdicionaCalcula = document.querySelector('#calcular');
const btnLimpar = document.querySelector('#limpar');
const saidaValor = document.querySelector('#resultado');

let arrValores = [];

btnAdicionaCalcula.addEventListener('click', function () {
    if (inputValor.value.trim() !== '') {
        // arrValores.push(Number(inputValor.value));
        arrValores.push(inputValor.value);
        console.log(arrValores)
        somaValores();
    } else {
        alert('Preencher com numeros!')
    }
});

function somaValores() {

    saidaValor.innerHTML = '';
    inputValor.value = '';

    arrValores.map(valor => {
        saidaValor.innerHTML += `${valor * 3}, `;
    })
}

btnLimpar.addEventListener('click', function() {
    arrValores = [];
    console.log(arrValores)
    saidaValor.innerHTML = '';
    inputValor.value = '';
})