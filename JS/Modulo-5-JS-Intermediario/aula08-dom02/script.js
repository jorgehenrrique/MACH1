// Itens obrigatórios na página:
// ● Deve conter parágrafos
// ● Deve conter divs
// ● A semântica do HTML deve estar bem formatada.
// ● O código deve estar organizado e bem estruturado, inclusive as pastas

let filhosBody = document.body.children; // children para retornar só os nós, sem os nós de texto
// Exibe no console quantos elementos filhos body tem
console.log(`Existem: ${filhosBody.length} elementos filhos no body.`);


let verifica = (filhos) => { // Retorna no console: true, se maior que 5 filhos, caso nao: false
    if (filhos > 5) {
        console.log(true);
    } else {
        console.log(false);
    }
}
verifica(filhosBody.length);

// Exibe todo conteúdo que tem a tag p
let listaP = document.querySelectorAll('p'); // Recolhe os elementos com a tag p
console.log(listaP); // Exibe todos elementos com tag p