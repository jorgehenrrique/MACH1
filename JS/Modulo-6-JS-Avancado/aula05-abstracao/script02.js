// Atividade pratica - POO - Abstracao 02

class Aluno {
    endereco = '';
    data_nascimento = new Date();
    email = '';
    telefone = '';
    avaliacoes = [];
    #id = 0;
    constructor(nome) {
        this.nome = nome;

        const geraId = () => {
            return () => this.#id++;
        };
    }
    geraId()
    // contaId() {
    //     console.log(this.#id)
    //     return this.#id++;
    // }

    // get exibeId() {
    //     console.log(this.#id);
    // }
}


const primeiroAluno = new Aluno('Primeiro Aluno');
console.log(primeiroAluno.nome)
// console.log(primeiroAluno.exibeId)
const segundoAluno = new Aluno('Segundo Aluno');
console.log(segundoAluno.nome)
// console.log(segundoAluno.exibeId)
