// Atividade pratica - POO - Abstracao 02

class Aluno {
    endereco = '';
    data_nascimento = new Date();
    email = '';
    telefone = '';
    avaliacoes = [];
    #id = iD();
    constructor(nome) {
        this.nome = nome;
    }

    get imprimeExemplo() {
        console.log(`#id: ${this.#id}, nome: ${this.nome}`);
    }
}

const geraId = (n) => { // Funcao Closure
    n = Number();
    return () => n++;
};
const iD = geraId();

const primeiroAluno = new Aluno('Primeiro Aluno');
const segundoAluno = new Aluno('Segundo Aluno');
const terceiroAluno = new Aluno('Terceiro Aluno');

primeiroAluno.imprimeExemplo;
segundoAluno.imprimeExemplo;
terceiroAluno.imprimeExemplo;