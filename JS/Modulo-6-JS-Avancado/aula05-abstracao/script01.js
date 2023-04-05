// Atividade pratica - POO - Abstracao 01

class Aluno {
    endereco = '';
    data_nascimento = new Date();
    email = '';
    telefone = '';
    avaliacoes = [];
    constructor(nome) {
        this.nome = nome;
    }
}

class Avaliacao {
    nota = 0;
    observacao = '';
    constructor(tipo) {
        this.tipo = tipo;
    }
}
