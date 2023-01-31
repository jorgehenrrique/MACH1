/*
Crie um arquivo chamado arrays1_js.html, e vamos fazer um algoritmo:
a. Crie um array para armazenar a seguinte lista:
0 - Sem cadastro
1 - Leite
2 - Ovo
3 - Farinha
4 - Milho
5 – Café

b. Através da função adequada, receba o “Código do produto” do usuário, busque o código na posição correspondente do array que você criou, e exiba o nome do produto. Ex: Usuário digitou 1, “Leite”.

c. Caso o usuário digite um código que não esteja contido, exiba o valor da posição 0 do seu vetor, e pergunte se deseja adicionar o produto.

d. Se o usuário optar por adicionar o produto, receba o valor utilizando a função adequada no JS, inclua esse valor em seu vetor e conclua com uma mensagem de sucesso, com o código e nome do produto. Ex: “Produto incluído com sucesso: 6 - Óleo”.
*/
{ // Exercício array
    // a
    let compras = ['Sem cadastro', 'Leite', 'Ovo', 'Farinha', 'Milho', 'Café'];

    // b
    let codigo = prompt('Informe o codigo do produto: ');
    // console.log(`Produdo selecionado: ${compras[codigo]}`);

    // c
    if (codigo < 1 || codigo > compras.length-1){
        alert(compras[0]);
        let novoProduto = '';
        novoProduto = prompt(`Deseja adicionar o produto? s ou n: `);
        if (novoProduto.toLowerCase() == 's'){
            compras[codigo] = prompt('Informe o nome do produto: ');
            // d
            alert(`Produto incluido com sucesso: ${codigo} - ${compras[codigo]}`)
        } else {
            alert('Até logo.');
        }
    }else {
        // b
        alert(`Produdo selecionado: ${compras[codigo]}`);
    }
}