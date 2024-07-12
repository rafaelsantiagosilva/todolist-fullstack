const addForm = document.getElementsByClassName("add-form")[0];
const inputTask = document.getElementsByClassName("input-task")[0];

async function createTask(event) {
     event.preventDefault();

     const task = { title: inputTask.value };


     await fetch("http://localhost:3333/tasks", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(task)
     });

     loadTasks();
     inputTask.value = "";
}

addForm.addEventListener("submit", createTask);