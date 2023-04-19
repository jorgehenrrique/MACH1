import { ProcessarArquivos } from "./utils.js";

const files = []
for (let i = 1; i <= 100; i++) {
    files.push({ text: `Arquivo ${i}`, id: i, file: `arquivo_${i}.txt` });
}

files.forEach(x => {
    let op = document.createElement("option")
    op.value = x.file
    op.innerText = x.text
    document.querySelector("#arquivos").appendChild(op)
})


const totalEnviados = document.querySelector('#totalArquivos');
const totalSucesso = document.querySelector('#totalArquivosSucesso');
const totalErro = document.querySelector('#totalArquivosErros');
const select = document.querySelector('#arquivos');
const btnProcessar = document.querySelector('#processar');

btnProcessar.onclick = recebeArquivos;
function recebeArquivos() {
    let selecionados = select.selectedOptions;
    let arquivos = [];
    for (let arquivo of selecionados) {
        arquivos.push(arquivo.value)
    }
    if (arquivos.length > 0) enviarArquivos(arquivos);
}

function enviarArquivos(arquivos) {
    Promise.allSettled(ProcessarArquivos(arquivos))
        .then(result => {
            let totalArquivos = result.length;
            let totalEnviado = 0;
            let totalNaoEnviado = 0;
            result.forEach((res) => {
                if (res.status === 'rejected') totalEnviado++;
                if (res.status === 'fulfilled') totalNaoEnviado++;
            })
            trataRetorno(totalArquivos, totalEnviado, totalNaoEnviado);
        }).catch(err => {
        })
}

function trataRetorno(total, sucesso, erro) {
    totalEnviados.innerText = total;
    totalSucesso.innerText = sucesso;
    totalErro.innerText = erro;
}