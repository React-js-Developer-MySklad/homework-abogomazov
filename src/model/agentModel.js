export class Agent {
    id;
    name;
    inn;
    address;
    kpp;

    constructor(id, name, inn, address, kpp) {
        this.id = id;
        this.name = name;
        this.inn = inn;
        this.address = address;
        this.kpp = kpp;
    }
}

export class Repository {
    agentList = new Map();
    maxId = 3;

    constructor() {
        this.agentList.set('0', new Agent(0, "Name0", "Inn0", "Address0", "Kpp0"));
        this.agentList.set('1', new Agent(1, "Name1", "Inn1", "Address1", "Kpp1"));
        this.agentList.set('2', new Agent(2, "Name2", "Inn2", "Address2", "Kpp2"));
    }

    add(agent) {
        this.agentList.set(agent.id, agent);
    }

    get(id) {
        return this.agentList.get(id);
    }

    nextId() {
        return this.maxId++;
    }

    remove(id) {
        this.agentList.delete(id);
    }


}