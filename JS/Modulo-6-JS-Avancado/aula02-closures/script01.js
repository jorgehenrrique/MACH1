// Atividade pratica Closures 01

function montarTabuada(numero) {

    return function (x, y) {
        for (x; x <= y; x++) {
            let result = x * numero;
            console.log(`${x} X ${numero} = ${result}`);
        }
    }
}

const tabuada = montarTabuada(2);
tabuada(1, 10);