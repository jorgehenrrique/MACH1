const inputCep = document.querySelector('#cep');
const divLoading = document.querySelector('#loading');
const divMessage = document.querySelector('#message');
const printLogradouro = document.querySelector('#logradouro');
const printBairro = document.querySelector('#bairro');
const printUf = document.querySelector('#uf');


let buscaCep = new XMLHttpRequest();

inputCep.addEventListener('blur', () => {
    let cep = inputCep.value;
    cep = cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
    buscaCep.open('GET', `https://cdn.apicep.com/file/apicep/${cep}.json`, true);
    buscaCep.onreadystatechange = () => buscar(buscaCep);
    buscaCep.send(); // Enviando a request
});

function buscar(buscaCep) {
    if (buscaCep.readyState === 1) { // Status da requisição
        divLoading.style.display = 'block';
    }
    if (buscaCep.readyState === 4) {
        divLoading.style.display = 'none';
        tratamentoCep(buscaCep);
    }
    if (buscaCep.status === 200) { // Status Code
        divMessage.style.display = 'none';
    } else {
        divMessage.style.display = 'block';
    }
}

function tratamentoCep(cep) {
    let retorno = JSON.parse(cep.responseText); // Converto para objeto JSON
    printLogradouro.innerText = retorno.address;
    printBairro.innerText = retorno.district;
    printUf.innerHTML = retorno.state;
} // CEP: 04538-133