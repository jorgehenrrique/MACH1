// Atividade pratica Closures 02

function criarContador(n) {

    function contador() {
        // console.log(n)
        return n++;
    }
    return contador;
}

const contador = criarContador(1);

const idAluno1 = contador();
console.log(idAluno1);
const idAluno2 = contador();
console.log(idAluno2);
const idAluno3 = contador();
console.log(idAluno3);

const novoContador = criarContador(6);

console.log(novoContador());
console.log(novoContador());
// novoContador();
// novoContador();