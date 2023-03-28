// Atividade pratica Recursividade - 01

const clientes = ['Jorge', 'Maria', 'Manoel', 'João', 'Roberto', 'Vera'];

function calcularTempoSaida(arr, cliente, minutos = 15) {
    if (arr[arr.length - 1] == cliente) {
        return minutos;
    } else {
        // arr.pop(); // atualizado para linha 12
        minutos += 15;
        const arrCopy = arr.slice(0, arr.length - 1); // cria uma cópia do array original sem alterá-lo, e deixa o ultimo item de fora
        return (arr.length <= 0) ? null : calcularTempoSaida(arrCopy, cliente, minutos);
    }
}

console.log(calcularTempoSaida(clientes, 'Vera')); // Resultado (15)
console.log(calcularTempoSaida(clientes, 'Manoel')); // Resultado (60)
console.log(calcularTempoSaida(clientes, 'Jorge')); // Resultado (90)
console.log(calcularTempoSaida(clientes, 'Jonas')); // Resultado (null)
