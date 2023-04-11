import Order from "./product.mjs";


class OrderDelivery extends Order {
    constructor(id, name, created, client) {
        super(id, name, created);
        this.client = client;
    }

    // calculateShipping(zipCode)
}

class OrderStore extends Order {
    constructor(id, name, created, tableNumber) {
        super(id, name, created);
        this.tableNumber = tableNumber;
    }

    // calculateShipping()
}

// export default OrderStore;