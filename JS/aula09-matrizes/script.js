{ // Exercicio Matriz aula 09
    // a
    let matriz =
        [[2, 0, 0],
        [2,1,2],
        [2,2,4],
        [2,3,6],
        [2,4,8],
        [2,5,10],
        [2,6,12],
        [2,7,14],
        [2,8,16],
        [2,9,18],
        [2,10,20]];

    console.log('Linhas da matriz');
    for (let linha of matriz){
        for (let item of linha){
        console.log(item);
        }
        console.log('\n');
    }

    alert('A matriz representa uma tabela de multiplicação.');
    alert('Cada linha representa a multiplicação do primeiro número vezes o segundo, até a ultima linha.');
}