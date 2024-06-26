import tableView from './table.html'
import rowView from './row.html'
import {elementFromHtmlTemplate} from "../app/app";
import {Agent, Repository} from "../model/agentModel";

class TableView {
    #node;

    constructor() {
        this.#node = elementFromHtmlTemplate(tableView)
    }

    getNode() {
        return this.#node;
    }

    #add(data) {
        const body = this.#node.getElementsByTagName("tbody")[0];
        body.appendChild(this.agentToRow(data));
    }

    load(datas) {
        this.#removeAll();
        for (const data of datas) {
            this.#add(data);
        }
    }

    #removeAll() {
        const body = this.#node.getElementsByTagName("tbody")[0];
        while (body.childNodes.length > 0) {
            body.removeChild(body.childNodes[0]);
        }
    }

    addRemoveHandler(f) {
        let rows = this.#node.getElementsByTagName("tbody")[0]
            .getElementsByTagName("tr");
        for (const row of rows) {
            row.children[5].children[0].addEventListener('click', (e) => {
                e.preventDefault();
                f(row.children[0].innerText);
            })
        }
    }

    addEditHandler(f) {
        let rows = this.#node.getElementsByTagName("tbody")[0]
            .getElementsByTagName("tr");
        for (const row of rows) {
            row.addEventListener('dblclick', (e) => {
                e.preventDefault();
                f(row.children[0].innerText);
            })
        }
    }

    agentToRow(agent) {
        let row = elementFromHtmlTemplate(rowView);

        const idCell = row.children[0];
        idCell.innerText = agent.id;

        const nameCell = row.children[1];
        nameCell.innerText = agent.name;

        const innCell = row.children[2];
        innCell.innerText = agent.inn;

        const addressCell = row.children[3];
        addressCell.innerText = agent.address;

        const kppCell = row.children[4];
        kppCell.innerText = agent.kpp;

        return row;
    }
}

export default TableView;