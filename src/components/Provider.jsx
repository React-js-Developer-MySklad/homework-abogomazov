 function getAgentsContext() {
    return fetch("http://localhost:3001/agents")
        .then(res => res.json());
}

function deleteAgentContext(id) {
    return fetch("http://localhost:3001/agents/" + id, {
        method: "DELETE"
    });
}

function addAgentContext(newRow) {
    return fetch("http://localhost:3001/agents/", {
        method: "POST",
        body: JSON.stringify(newRow)
    });
}

function updateAgentContext(newRow) {
    return fetch("http://localhost:3001/agents/" + newRow.id, {
        method: "PUT",
        body: JSON.stringify(newRow)
    });
}

export const context = {
    getAgentsContext,
    deleteAgentContext,
    addAgentContext,
    updateAgentContext
}