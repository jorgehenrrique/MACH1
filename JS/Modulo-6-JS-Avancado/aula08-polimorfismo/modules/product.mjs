class Product {
    #id;
    constructor(id, name) {
        this.#id = id;
        this.name = name;
    }
}

class Order {
    #id;
    created = new Date();
    #products = [];
    constructor(created) {
        // this.#id = id;
        this.created = created;
    }

    addProduct(productCode) {
        if (productCode instanceof Product) {
            this.#products.push(productCode);
            // console.log(this.#products)
        } else {
            throw new Error('Não é um produto válido!')
        }
    }

    // calculateShipping()
}

const produto1 = new Product(3, 'Coca');
const produto2 = new Product(4, 'Cola');

const ordem1 = new Order('4-10-2023');
console.log(ordem1)

ordem1.addProduct(produto1);
ordem1.addProduct(produto2);


export default Order;