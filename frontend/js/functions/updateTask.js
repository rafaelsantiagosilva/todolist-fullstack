async function updateTask(task) {
     const { id, title, created_at, status } = task;

     await fetch(`http://localhost:3333/tasks/${id}`, {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, status })
     })

     loadTasks();
}