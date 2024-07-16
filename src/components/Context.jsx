export function getAgentsContext() {
    return fetch("http://localhost:3001/agents")
        .then(res => res.json());
}

export function deleteAgentContext(id) {
    return fetch("http://localhost:3001/agents/" + id, {
        method: "DELETE"
    });
}

export function addAgentContext(newRow) {
    return fetch("http://localhost:3001/agents/", {
        method: "POST",
        body: JSON.stringify(newRow)
    });
}

export function updateAgentContext(newRow) {
    return fetch("http://localhost:3001/agents/" + newRow.id, {
        method: "PUT",
        body: JSON.stringify(newRow)
    });
}