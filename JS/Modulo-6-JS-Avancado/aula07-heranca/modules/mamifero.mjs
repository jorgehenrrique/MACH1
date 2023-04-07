import Animal from "./animal.mjs";


export default class Mamifero extends Animal {
    possuiPelo;
    velocidade;
    constructor(nome, possuiCalda) {
        super(nome);
        this.possuiCalda = possuiCalda;
    }
}