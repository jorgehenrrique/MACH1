import Ave from "./ave.mjs";


export default class AveFalante extends Ave {
    vocabulario = [];
    constructor(nome, tamanhoBico, vocabulario) {
        super(nome, tamanhoBico);
        this.vocabulario = vocabulario;
    }
}