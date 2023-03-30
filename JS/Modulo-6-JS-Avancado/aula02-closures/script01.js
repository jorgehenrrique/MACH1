// Atividade pratica Closures 01

function montarTabuada(numero) {
    let de = numero;

    return function(x,y) {
        for (x ; x <= y; x++){
            result = x * de;
            console.log(`${x} X ${de} = ${result}`);
        }
    }
}

const tabuada = montarTabuada(2);
tabuada(1, 10);