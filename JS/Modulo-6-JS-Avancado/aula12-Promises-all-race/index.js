import { EnviarMensagemServers } from "./utils.js";

const inputMsg = document.querySelector('#mensagem');
const btnEnviar = document.querySelector('#enviar');
const divPrint = document.querySelector('#primeiraResposta');

btnEnviar.onclick = verificaInput;
function verificaInput() {
    let msg = inputMsg.value.trim();
    if (!msg.length <= 0) {
        enviaMsg();
    } else {
        divPrint.innerText = 'Campo mensagem é obrigratório';
        limpaMsg();
    }
}

function enviaMsg() {
    Promise.race(EnviarMensagemServers())
        .then((result) => {
            msgEnviada();
            // console.log(result)
        })
        .catch((err) => {
            msgNaoEnviada();
            // console.warn(err)
        });
}

function msgEnviada() {
    divPrint.innerText = '';
    divPrint.style.color = 'green';
    divPrint.innerText = 'Mensagem enviada com sucesso';
    limpaMsg();
}

function msgNaoEnviada() {
    divPrint.innerText = '';
    divPrint.style.color = 'red';
    divPrint.innerText = 'Mensagem Não enviada';
    limpaMsg();
}

function limpaMsg() {
    setTimeout(() => divPrint.innerText = '', 4000);
}