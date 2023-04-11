class Client {
    #id;
    name;
    address;
    zipCode;
    active = false;
    constructor(id, name, active) {
        this.#id = id;
        this.name = name;
        this.active = active;
    }
}

// export default Client;