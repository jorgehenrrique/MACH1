import Animal from "./modules/animal.mjs";
import Ave from "./modules/ave.mjs";
import AveFalante from "./modules/aveFalante.mjs";
import AvaNaoFalante from "./modules/aveNaoFalante.mjs";
import Canino from "./modules/canino.mjs";
import Felino from "./modules/felino.mjs";
import Mamifero from "./modules/mamifero.mjs";
import Peixe from "./modules/peixe.mjs";

const animal1 = new Animal('Julius');
console.log(animal1.nome);

const animal2 = new Ave('Papagaio');
console.log(animal2.nome);

const animal3 = new Peixe('Tubarão');
console.log(animal3.nome);

const animal4 = new Mamifero('Lobo');
console.log(animal4.nome);

const animal5 = new AveFalante('Calupcita');
console.log(animal5.nome);

const animal6 = new AvaNaoFalante('Tucano');
console.log(animal6.nome);

const animal7 = new Canino('Cachorro');
console.log(animal7.nome);

const animal8 = new Felino('Gato');
console.log(animal8.nome);
