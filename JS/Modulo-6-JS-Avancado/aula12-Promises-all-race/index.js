import { EnviarMensagemServers } from "./utils.js";

const inputMsg = document.querySelector('#mensagem');
const btnEnviar = document.querySelector('#enviar');
const divPrint = document.querySelector('#primeiraResposta');

btnEnviar.onclick = verificaInput;
function verificaInput() {
    let msg = inputMsg.value.trim();
    if (!msg.length <= 0) {
        enviaMsg(msg);
    } else {
        // divPrint.innerText = 'Campo mensagem é obrigratório';
        alert('Campo mensagem é obrigratório');
        limpaMsg();
    }
}

function enviaMsg(msg) {
    Promise.race(EnviarMensagemServers())
        .then((result) => {
            msgEnviada(msg);
            // console.log(result)
        })
        .catch((err) => {
            msgNaoEnviada(msg);
            // console.warn(err)
        });
}

function msgEnviada(msg) {
    divPrint.innerText = '';
    divPrint.style.color = 'green';
    divPrint.innerText = `Mensagem: ${msg} - enviada com sucesso`;
    limpaMsg();
}

function msgNaoEnviada(msg) {
    divPrint.innerText = '';
    divPrint.style.color = 'red';
    divPrint.innerText = `Mensagem: ${msg} - não enviada`;
    limpaMsg();
}

function limpaMsg() {
    setTimeout(() => divPrint.innerText = '', 8000);
}