import { useState } from "react";

import "./App.css";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";
import {getAgentsContext, deleteAgentContext, updateAgentContext, addAgentContext} from "./components/Context";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    deleteAgent(rows[targetIndex].id);
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? addAgent(newRow)
      : updateAgent(newRow);
  };

    function getAgents() {
        getAgentsContext()
            .then(result =>
                setRows(result)
            )
            .catch(console.log);
    }

    function deleteAgent(id) {
        deleteAgentContext(id).then(getAgents);
    }

    function addAgent(newRow) {
        addAgentContext(newRow).then(getAgents);
    }

    function updateAgent(newRow) {
        updateAgentContext(newRow).then(getAgents);
    }

  return (
    <div className="App">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {getAgents()}
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;
