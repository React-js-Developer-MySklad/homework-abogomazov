import html from "./app.html";
import './app.css'
import {Agent, Repository} from "../model/agentModel";
import TableView from "../view/tableView";
import ModalForm from "../modal/modal";
import modal from "../modal/modal";


const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

const main = document.getElementById("main");
const addButton = document.getElementById("add-button");

const repository = new Repository();
const tableView = new TableView();
const modalView = new ModalForm();

main.appendChild(tableView.getNode());
main.appendChild(modalView.getNode())

init();

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    modalView.open(new Agent(repository.nextId(), "", "", "", ""));
});

modalView.getSaveButton().addEventListener("click", (e) => {
    e.preventDefault();
    repository.add(modalView.getData());
    init();
});

function init() {
    tableView.load(repository.agentList.values());
    tableView.addRemoveHandler((id) => {
        repository.remove(id);
        init();
    });
    tableView.addEditHandler((id) => {
        modalView.open(repository.get(id));
    });
}

export function elementFromHtmlTemplate(htmlTemplate) {
    let div = document.createElement('template');
    div.innerHTML = htmlTemplate.trim();
    return div.content.children[0];
}