{
    let anosNaEscola = prompt('Quantos anos voce esta vinculado na escola?');
    
    if (isNaN(anosNaEscola)) {
        alert('Voce deve digitar apenas números para receber o dado correto.');
    }

    let reciclagens = anosNaEscola / 2;
    reciclagens = parseInt(reciclagens);

    if (anosNaEscola < 2) {
        alert('Voce ainda nao tem o tempo minimo de 2 anos para ter uma reciclagem.');
    } else if(reciclagens) {
        alert(`Esse piloto particiou de: ${reciclagens} reciclagens.`);
    }
}