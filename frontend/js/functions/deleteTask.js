async function deleteTask(id) {
     await fetch("http://localhost:3333/tasks/" + id, { method: "delete" });
     loadTasks();
}