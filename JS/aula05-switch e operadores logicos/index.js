{
    // banho e tosa
    // cachorro
    // gato
    // coelho

    // veterinario especializado
    // cavalo
    // cabra
    // jumento

    // gaiolas especiais p/ ratos
    // implante de rastreador p/ passarinhos
    // racao p/ todos animais
    // nao atende outros animais nao citados

    let animal = prompt('Informe o animal:');
    animal = animal.toLowerCase();

    switch (animal){
        case 'cachorro':
        case 'gato':
        case 'coelho':
            alert(`Oferecemos para ${animal}: banho, tosa e racao.`);
            break
        case 'cavalo':
        case 'cabra':
        case 'jumento':
            alert(`Oferecemos para ${animal}: veterinario especializado e racao.`);
            break
        case 'rato':
            alert(`Oferecemos para ${animal}: gaiolas especiais e racao`);
            break
        case 'passarinho':
            alert(`Oferecemos para ${animal}: implante de rastreador e racao`);
            break
        default:
            alert(`Nao atendemos o animal ${animal}`);
    }
}