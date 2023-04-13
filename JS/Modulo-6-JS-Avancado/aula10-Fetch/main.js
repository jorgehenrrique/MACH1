const optBuscaNome = document.querySelector("#opt-busca-nome")
const optBuscaTodos = document.querySelector("#opt-busca-todos")
const filtersNome = document.querySelector("#pn-filter-nome");

import { inputMatricula, printNome, printMatricula, btnBuscarMatricula, inputBuscarNome, btnBuscar, printDados, divDados, loaderConsulta } from "./modules/elementos.js";

optBuscaNome.addEventListener("click", (e) => {
    if (e.target.checked) {
        filtersNome.style.display = "block";
    }
});

optBuscaTodos.addEventListener("change", (e) => {
    if (e.target.checked) {
        filtersNome.style.display = "none";
    }
});

const buscarMatricula = () => {
    let matriculaBusca = inputMatricula.value.trim();
    if (matriculaBusca) {
        buscaPorMatricula(matriculaBusca);
        divDados.style.display = 'none';
        loaderConsulta.style.display = 'block'
    } else {
        console.warn('Digite a matrigula')
    }
}

const buscarNome = () => {
    let nomeBusca = inputBuscarNome.value.trim();
    if (nomeBusca) {
        console.log('Buscando nome')
        buscaPorNome(nomeBusca);
        loaderConsulta.style.display = 'block'
    } else {
        console.log('Buscando todos')
        buscaPorTodos();
        divDados.style.display = 'none';
        loaderConsulta.style.display = 'block'
    }
}
btnBuscarMatricula.onclick = buscarMatricula;
btnBuscar.onclick = buscarNome;

function buscaPorMatricula(matricula) {
    const urlBuscaM = `http://192.168.50.99:3000/aluno/${matricula}`;
    const options = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };
    fetch(urlBuscaM, options).then((response) => {
        if (response.ok && response.status === 200) {
            loaderConsulta.style.display = 'none'
            return response.json();
        } else {
            // console.error('Matricula não encontrada');
            loaderConsulta.style.display = 'none'
            alert('Matricula não encontrada')
        }
    }).then((data) => {
        // console.log(data)
        if (!data) {
            printNome.innerText = '';
            printMatricula.innerText = '';
            throw new Error('Não foi possível consultar essa informacao');
        }
        printNome.innerText = data.nome;
        printMatricula.innerText = data.matricula;
    }).catch((error) => {
        console.warn(error);
    })
};

function buscaPorNome(nome) {
    const urlBuscaN = `http://192.168.50.99:3000/aluno/search?nome=${nome}`;
    const options = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };
    fetch(urlBuscaN, options).then((response) => {
        if (response.ok && response.status === 200) {
            return response.json();
        } else {
            // console.error('Nome não encontrado');
            loaderConsulta.style.display = 'none'
            alert('Nome não encontrado')
        }
    }).then((data) => {
        if (data.length <= 0) {
            loaderConsulta.style.display = 'none'
            printDados.innerHTML = '';
            printDados.innerHTML = `<tr><td colspan="2">Nenhuma informação encontrada.</td></tr>`;
            alert('Nome não encontrado')
            throw new Error('Não foi possível consultar essa informacao');
        }
        divDados.style.display = 'block';
        printDados.innerHTML = '';
        imprimeAlunos(data);
    })
}

function imprimeAlunos(data) {
    loaderConsulta.style.display = 'none'
    for (let aluno in data) {
        printDados.innerHTML += `<tr><td>Nome: ${data[aluno].nome} - Matricula: ${data[aluno].matricula} - <button onclick="excluir(${data[aluno].matricula})">Excluir aluno</button></td></tr>`;
    }
}

function buscaPorTodos() {
    const urlBuscaT = `http://192.168.50.99:3000/aluno/todos`;
    const options = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };
    fetch(urlBuscaT, options).then((response) => {
        if (response.ok && response.status === 200) {
            return response.json();
        } else {
            // console.error('Dados não encontrados');
            loaderConsulta.style.display = 'none'
            alert('Dados não encontrado')
        }
    }).then((data) => {
        if (data.length <= 0) {
            loaderConsulta.style.display = 'none'
            printDados.innerHTML = '';
            printDados.innerHTML = `<tr><td colspan="2">Nenhuma informação encontrada.</td></tr>`;
            throw new Error('Não foi possível consultar essa informacao');
        }
        divDados.style.display = 'block'
        printDados.innerHTML = '';
        imprimeAlunos(data);
    })
}

function excluir(matricula) {
    console.log(matricula)
}
