/*
Após clicar no botão Salvar valide se os nomes estão preenchidos. Caso não estejam, exiba uma mensagem de erro para o usuário.
Caso estejam todos preenchidos, preencha a lista que está na parte de baixo do protótipo na mesma ordem que o preenchimento do formulário.
Dicas:
● As mensagens para o cliente devem ser exibidas através de uma div que aparece ou não de acordo com a situação. 
● O processo de salvar pode alterar mais de uma vez a lista, depende do clique do botão!
*/
// O método trim() remove os espaços em branco no início e no final de uma string

const nome1 = document.querySelector('#nome1');
const nome2 = document.querySelector('#nome2');
const nome3 = document.querySelector('#nome3');

const nomePreenche1 = document.querySelector('.nome01');
const nomePreenche2 = document.querySelector('.nome02');
const nomePreenche3 = document.querySelector('.nome03');

const botao = document.querySelector('#btn');

botao.onclick = function () { // Chama a primeira funcao ao ser clicado
    validaPreenchimento();
};

function validaPreenchimento() { // Verifica campos preenchidos
    if (nome1.value.trim() !== ''
        && nome2.value.trim() !== ''
        && nome3.value.trim() !== '') {
        document.querySelector('.erro').style.display = 'none';
        preencheLista();
    } else {
        document.querySelector('.erro').style.display = 'block'; // Exibe mensagem para preencher todos os campos, caso não estejam preenchidos
    }
}

function preencheLista() { // Preenche a lista de nomes
    nomePreenche1.innerHTML = nome1.value;
    nomePreenche2.innerHTML = nome2.value;
    nomePreenche3.innerHTML = nome3.value;
}
