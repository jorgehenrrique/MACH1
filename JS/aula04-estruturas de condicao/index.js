{   // Exercicio a
    let letra = prompt('Digite uma letra do alfabeto:');
    // console.log(letra);
    // Exercicio b
    // se é numero sendo string ou number retorna: false, se é string letra retorna: true.
    let eNumero = isNaN(letra);
    // console.log(eNumero);
    
    let letraMinuscula = letra.toLowerCase()
    // console.log(letraMinuscula);

    if (eNumero === false){
        alert('Deve digitar uma letra do alfabeto para obter o resultado');
    }else if(letraMinuscula === 'a' || letraMinuscula === 'e' || letraMinuscula === 'i' || letraMinuscula === 'o' || letraMinuscula === 'u'){
        alert('Letra digitada é uma vogal');
    }else{
        alert('Letra digitada é uma consoante');
    }
}
