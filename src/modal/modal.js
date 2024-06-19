import {elementFromHtmlTemplate} from "../app/app";
import modalView from "../modal/modal.html";
import {Modal} from "flowbite";
import {Agent} from "../model/agentModel";

class ModalForm {

    #node;
    #modal;
    #saveButton;

    constructor() {
        this.#node = elementFromHtmlTemplate(modalView);
        this.#modal = new Modal(this.#node);
        this.#saveButton = this.#node.querySelector("#save-button");
    }

    getNode() {
        return this.#node;
    }

    getSaveButton() {
        return this.#saveButton;
    }

    open(data) {
        this.#modal.show();
        let idF= this.#node.querySelector("#ide")
        idF.value = data.id;
        let nameF= this.#node.querySelector("#name")
        nameF.value = data.name;
        let innF= this.#node.querySelector("#inn")
        innF.value = data.inn;
        let addressF= this.#node.querySelector("#address")
        addressF.value = data.address;
        let kppF= this.#node.querySelector("#kpp")
        kppF.value = data.kpp;
    }

    getData() {
        return new Agent(
            this.#node.querySelector("#ide").value,
            this.#node.querySelector("#name").value,
            this.#node.querySelector("#inn").value,
            this.#node.querySelector("#address").value,
            this.#node.querySelector("#kpp").value)
    }

}

export default ModalForm;