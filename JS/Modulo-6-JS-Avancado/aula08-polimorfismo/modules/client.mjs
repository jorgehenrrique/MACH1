class Client {
    #id;
    name;
    address;
    zipCode;
    active = false;
    constructor(id, name, zipCode, active) {
        this.#id = id;
        this.name = name;
        this.zipCode = zipCode;
        this.active = active;
    }
}


export default Client;