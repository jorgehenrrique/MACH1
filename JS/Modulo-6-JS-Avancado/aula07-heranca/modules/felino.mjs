import Mamifero from "./mamifero.mjs";

export default class Felino extends Mamifero {
    constructor(nome, possuiCalda, mia) {
        super(nome, possuiCalda);
        this.mia = mia;
    }
}