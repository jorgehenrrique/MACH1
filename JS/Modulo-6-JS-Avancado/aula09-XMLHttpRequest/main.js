const inputCep = document.querySelector('#cep');
const divLoading = document.querySelector('#loading');
const divMessage = document.querySelector('#message');
const printLogradouro = document.querySelector('#logradouro');
const printBairro = document.querySelector('#bairro');
const printUf = document.querySelector('#uf');



inputCep.addEventListener('blur', () => {
    let cep = inputCep.value;
    let buscaCep = new XMLHttpRequest();

    buscaCep.onreadystatechange = buscar(cep, buscaCep);
});

function buscar(cep, buscaCep) {
    console.log(buscaCep)
    console.log(buscaCep.readyState)
    // if (buscaCep.readyState === 1) { // status da requisição
        divLoading.style.display = 'block';
    // }
    console.log(buscaCep.readyState)////////
    console.log(buscaCep.status)////////
    if (buscaCep.readyState === 4) {
        console.log('OK');
        divLoading.style.display = 'none';
        if (buscaCep.status === 200) { // Status Code
            console.log('Sucesso OK');
            divMessage.style.display = 'none';
        } else {
            divMessage.style.display = 'block';
        }
    }
    buscaCep.open('GET', `https://cdn.apicep.com/file/apicep/${cep}.json`);
    buscaCep.send();
}
