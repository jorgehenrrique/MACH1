{
    let anosNaEscola = prompt('Quantos anos voce esta vinculado na escola?');
    // console.log(typeof anosNaEscola);
    if (isNaN(anosNaEscola)) {
        alert('Voce deve digitar apenas números para receber o dado correto.');
    }else {
        anosNaEscola = parseInt(anosNaEscola);
    }
    // console.log(typeof anosNaEscola);

    let reciclagens = anosNaEscola / 2;

    if (reciclagens < 2) {
        alert('Voce ainda nao tem o tempo minimo de 2 anos para ter uma reciclagem.');
    } else if(reciclagens) {
        alert(`Esse piloto particiou de: ${reciclagens} reciclagens.`);
    }
}