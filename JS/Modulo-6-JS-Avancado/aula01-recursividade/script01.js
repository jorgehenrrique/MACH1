// Atividade pratica Recursividade - 01

const clientes = ['Jorge', 'Maria', 'Manoel', 'João', 'Roberto', 'Vera'];

let minutos = 15
function calcularTempoSaida(arr, cliente) {
    if (arr[arr.length - 1] == cliente) {
        console.log(minutos);
        return minutos;
    } else {
        arr.pop();
        minutos += 15;
        return (arr.length <= 0) ? console.log(null) : calcularTempoSaida(arr, cliente);
    }
}

calcularTempoSaida(clientes, 'Vera') // Resultado (15)
calcularTempoSaida(clientes, 'Manoel') // Resultado (60)
calcularTempoSaida(clientes, 'Jorge') // Resultado (90)
calcularTempoSaida(clientes, 'Jonas') // Resultado (null)
