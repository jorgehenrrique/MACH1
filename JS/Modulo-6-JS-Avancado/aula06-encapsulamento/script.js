// Atividade pratica - POO - Encapsulamento 01

class Aluno {
    endereco = '';
    data_nascimento = new Date();
    email = '';
    telefone = '';
    #avaliacoes = [];
    constructor(nome, dataNasc) {
        this.nome = nome;
        this.data_nascimento = dataNasc;
    }

    get idade() {
        if (this.data_nascimento) {
            const dataAtual = new Date();
            const anoAtual = dataAtual.getFullYear();
            const [diaNascimento, mesNascimento, anoNascimento] = this.data_nascimento.split('/');
            if (!diaNascimento || !mesNascimento || !anoNascimento || anoNascimento.length < 4) {
                throw new Error('Data de Nascimento fora do padrão: dd/mm/aaaa');
            }
            const dataNascimentoObj = new Date(anoNascimento, mesNascimento - 1, diaNascimento);
            const anoNascimentoInt = dataNascimentoObj.getFullYear();
            const idade = anoAtual - anoNascimentoInt;
            return idade;
        } else {
            throw new Error('Data de Nascimento não informada');
        }
    }

    adicionarAvaliacao(avaliacao) {
        if (avaliacao instanceof Avaliacao) {
            this.#avaliacoes.push(avaliacao);
        } else {
            throw new Error('Avaliacao inválida!');
        }
    }

    obterMedia(media = 0) {
        // for (let nota of this.#avaliacoes) media += nota.nota;
        // media = media / this.#avaliacoes.length;
        // return media.toFixed(2);

        // --- Alternativa em reduce ---
        media = this.#avaliacoes.reduce((total, nota) => total + nota.nota, 0);
        media = media / this.#avaliacoes.length;
        return media.toFixed(2);
    }

    get aprovado() {
        return (this.obterMedia() >= 7);
    }
}

class Avaliacao {
    nota = 0;
    observacao = '';
    constructor(tipo, nota) {
        this.tipo = tipo;
        this.nota = nota;
    }
}

const aluno1 = new Aluno('Jorge', '10/08/1920');
const aluno2 = new Aluno('Joao', '11/05/1990');

const avaliacao1 = new Avaliacao('Prova', 8);
const avaliacao2 = new Avaliacao('Exercicio', 8);
const avaliacao3 = new Avaliacao('Avaliacao', 9);

const avaliacao11 = new Avaliacao('Prova', 5);
const avaliacao22 = new Avaliacao('Exercicio', 5);
const avaliacao33 = new Avaliacao('Avaliacao', 4);

aluno1.adicionarAvaliacao(avaliacao1);
aluno1.adicionarAvaliacao(avaliacao2);
aluno1.adicionarAvaliacao(avaliacao3);

aluno2.adicionarAvaliacao(avaliacao11);
aluno2.adicionarAvaliacao(avaliacao22);
aluno2.adicionarAvaliacao(avaliacao33);

console.log(aluno1.idade); // 103
console.log(aluno2.idade); // 33

console.log(aluno1.obterMedia()); // 8.33
console.log(aluno2.obterMedia()); // 4.67

console.log(aluno1.aprovado); // true
console.log(aluno2.aprovado); // false
