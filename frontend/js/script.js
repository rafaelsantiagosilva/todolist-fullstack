async function fetchTasks() {
     const API_PORT = 3333;
     const response = await fetch(`http://localhost:3333/tasks`);
     const tasks = await response.json();
     console.log(tasks);
}

fetchTasks();