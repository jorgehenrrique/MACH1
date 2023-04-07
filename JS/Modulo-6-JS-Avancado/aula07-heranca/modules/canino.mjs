import Mamifero from "./mamifero.mjs";

export default class Canino extends Mamifero {
    consegueUivar;
    constructor(nome, possuiCalda, late) {
        super(nome, possuiCalda);
        this.late = late;
    }
}