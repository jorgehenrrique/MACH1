// corrido mach1
// posicao dos ganhadores
// devem digitar os nomes nos pilotos separados por , Ex: piloto1,piloto2

// receber essa lista
// devolver a posicao e o nome do piloto
// os 3 primeiros exibir pódio
// Valide se existe conteúdo preenchido

{
    let piloto = prompt('Informe os nomes dos pilotos, separados por virgula: ');

    if (!isNaN(piloto)){
        alert('Voce digitou algo errado, escreva os nomes.');
        window.location.reload()
    }else {
        let nomePilotos = piloto.split(',');

        let exibirListaPilotos = '';

        for (posicao = 0; posicao < nomePilotos.length; posicao++){
            if (posicao < 3){
                exibirListaPilotos += 'Pódio - ' + (posicao+1) + ' - ' + nomePilotos[posicao]+ '\n';
            }else{
                exibirListaPilotos += posicao+1 + ' - ' + nomePilotos[posicao]+ '\n';
            }
        }
        alert('Lista dos pilotos:\n'+ exibirListaPilotos);
    }
}