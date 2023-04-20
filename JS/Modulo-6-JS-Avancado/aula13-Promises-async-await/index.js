import Turma from './models/turma-model.js'
import { CriarNovaTurma, getTurmas } from './services/turma-service.js'

/**
 * Função responsavel por atualizar a tabela de turmas com os alunos
 */
function atualizarTela() {
    const panelTurmas = document.querySelector(".turmas")

    panelTurmas.innerHTML = ""
    getTurmas().then(turmas => {
        turmas.forEach(turma => {
            let div = document.createElement("div")
            div.classList.add('turma')
            div.innerHTML = `<h2>${turma.nome}</h2>`;

            let alunos = turma.obterAlunosMatriculados().map(aluno => {
                return `<div>${aluno}</div>`;
            }).join('')

            div.innerHTML += alunos;
            panelTurmas.appendChild(div)
        })
    })
}
atualizarTela();

// || Atividade
const inputNome = document.querySelector('#nome');
const btnMatricular = document.querySelector('#matricular');

btnMatricular.onclick = matricularAluno;
function matricularAluno() {
    let nAluno = inputNome.value.trim();
    if (nAluno.length > 0) {
        verificaTurmas(nAluno);
        btnMatricular.disabled = true;
    };
}

async function verificaTurmas(aluno) {
    let turmaDisponivel = 0;
    let turmas = await getTurmas();
    for (let turma of turmas) {
        if (turma.obterAlunosMatriculados().length < 7) {
            turmaDisponivel++;
            await cadastrarAluno(aluno, turma);
            break;
        }
    }
    if (turmaDisponivel <= 0) {
        await CriarNovaTurma();
        atualizarTela();
        btnMatricular.disabled = false;
    }
}
async function cadastrarAluno(aluno, turma) {
    await turma.MatricularAluno(aluno);
    atualizarTela();
    inputNome.value = '';
    btnMatricular.disabled = false;
}