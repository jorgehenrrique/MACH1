import Animal from './animal.mjs';

export default class Ave extends Animal {
    velocidadeVoo;
    qtdAsas;
    constructor(nome, tamanhoBico) {
        super(nome);
        this.tamanhoBico = tamanhoBico;
    }
}