import Animal from "./animal.mjs";


export default class Peixe extends Animal {
    possuiEscamas;
    possuiBarbatana;
    constructor(nome, aguaHabitat) {
        super(nome);
        this.aguaHabitat = aguaHabitat;
    }
}