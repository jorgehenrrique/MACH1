import Order from "./product.mjs";
import Client from './client.mjs'

class OrderStore extends Order {
    constructor(created, tableNumber) {
        super(created);
        this.tableNumber = tableNumber;
    }

    calculateShipping() {
        return 0;
    }
}


class OrderDelivery extends Order {
    constructor(created, client) {
        super(created);
        if (client instanceof Client) {
            this.client = client;
        } else {
            throw new Error('Cliente informado inválido');
        }
    }

    calculateShipping(zipCode) {
        if (zipCode) this.client.zipCode = zipCode;
        
        const cod = parseInt(this.client.zipCode.toString().charAt(0));
        if (cod >= 0 && cod <= 4) {
            return 5;
        } else if (cod >= 5 && cod <= 9) {
            return 10;
        } else {
            throw new Error('Cep inválido');
        }
    }
}


const ordemInterna1 = new OrderStore('4-10-2023 19:00', 6);
// console.log(ordemInterna1);
console.log(ordemInterna1.calculateShipping());

const cliente1 = new Client(22, 'Jorge', 33, true);
const cliente2 = new Client(23, 'Joao', 55, true);
const cliente3 = new Client(24, 'Maria', '', false);
// console.log(cliente1);
// console.log(cliente2);
// console.log(cliente3);

const ordemExterna1 = new OrderDelivery('4-10-2023 20:00', cliente1);
const ordemExterna2 = new OrderDelivery('4-10-2023 21:00', cliente2);
const ordemExterna3 = new OrderDelivery('4-10-2023 21:30', cliente3);
// console.log(ordemExterna1);
// console.log(ordemExterna2);
// console.log(ordemExterna3);
console.log(ordemExterna1.calculateShipping());
console.log(ordemExterna2.calculateShipping());
console.log(ordemExterna3.calculateShipping(87));

export { OrderStore, OrderDelivery };