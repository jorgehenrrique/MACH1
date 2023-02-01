// Crie um arquivo chamado objetos_js.html, e vamos fazer um algoritmo:

// a. Utilize a sua criatividade e crie um objeto em JS que faça a representação (abstração) de um Apartamento. Pense em representar todas as propriedades que este objeto tem, e como você pode organizar essa informação.

// b. Exiba este objeto inteiro no console do navegador.

// c. Exiba apenas uma propriedade (qualquer uma que compõe o objeto) no console do navegador.
{ // Exercicio aula 10
    // a
    let apartamento = {
        tamanho: '150mt',
        mobiliado: 'sim',
        suites: 2,
        quartos: 4,
        vagaGaragem: 2,
        banheiroSocial: 2,
        outrosComodos: {
            sala: 'sim',
            lavabo: 'sim',
            cozinha: 'sim',
            lavanderia: 'sim'
        },
        aguaAquecida: 'sim',
        preco: 300.000
    };

    // b
    console.log(apartamento);
    console.log(apartamento.outrosComodos);

    // c
    console.log(apartamento.outrosComodos.lavanderia);
    console.log(apartamento['preco']);
}