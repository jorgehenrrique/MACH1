const resultado = document.querySelector('#resultado');

const shoppingCart = [
    {
        product: 'Leite - Barnabé',
        measure: 'Litro',
        qty: 5,
        price: 7.8
    },
    {
        product: 'Alcatra - Fribov',
        measure: 'Kg',
        qty: 1.896,
        price: 40
    },
    {
        product: 'Refrigerante - Toca Polar',
        measure: 'Pet - 2 Litros',
        qty: 3,
        price: 8.99
    },
    {
        product: 'Arroz - Tio Chicão',
        measure: 'Pacote - 1Kg',
        qty: 4,
        price: 5.99
    },
    {
        product: 'Peito de Frango - Hot Chicken',
        measure: 'Kg',
        qty: 5,
        price: 16.99
    }
];

function listarProdutos(lista) { // lista usuarios da lista acima
    lista.forEach(listarUsuario);
}
listarProdutos(shoppingCart); // passa a lista padrao como argumento

function listarUsuario(produto) {
    resultado.innerHTML += `<tr>
        <td>${produto.product}</td>
        <td>${produto.measure}</td>
        <td>${produto.qty}</td>
        <td>${produto.price}</td>
    </tr>`;
}

let totalCart = shoppingCart.reduce((total, item) => {
    return total + item.price * item.qty;
}, 0);

((total) => resultado.innerHTML += `<tr>
<td colspan="3">Total:</td>
<td>${total}</td>
</tr>` )(totalCart);
