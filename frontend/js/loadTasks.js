const tbody = document.querySelector("tbody");

async function fetchTasks() {
     const API_PORT = 3333;
     const response = await fetch(`http://localhost:${API_PORT}/tasks`, {
          method: "get", headers: { "Content-Type": "application/json" },
     });
     const tasks = await response.json();
     return tasks;
}

function formatDate(dateUTC) {
     const options = {
          dateStyle: "long",
          timeStyle: "short"
     }

     return new Date(dateUTC).toLocaleDateString(options);
}

function createElement(tag) {
     return document.createElement(tag);
}

function createOption(value) {
     const option = createElement("option");
     option.setAttribute("value", value);
     option.innerText = value;

     return option;
}

function createSelectStatus(task) {
     const { status } = task;

     const selectStatus = createElement("select");
     const optionsValues = ["pendente", "em andamento", "concluida"];

     optionsValues.forEach(option => {
          selectStatus.appendChild(createOption(option));
     });

     selectStatus.value = status;

     selectStatus.addEventListener("change", (event) => {
          updateTask({ ...task, status: event.target.value });
     })

     return selectStatus;
}

function createBtnAction(type) {
     if (type != "edit" && type != "delete")
          throw new Error("The acepted types to btnAction are 'edit' or 'delete'");

     const btnAction = createElement("button");
     btnAction.classList.add("btn-action");

     const symbol = createElement("span");
     symbol.classList.add("material-symbols-outlined");
     symbol.innerText = ` ${type} `;

     btnAction.appendChild(symbol);

     return btnAction;
}


function createRow(task) {
     const { id, title, created_at, status } = task;

     const tr = createElement("tr");

     const tdTitle = createElement("td");
     tdTitle.innerText = title;

     const tdCreatedAt = createElement("td");
     tdCreatedAt.innerText = formatDate(created_at);

     const tdStatus = createElement("td");
     const selectStatus = createSelectStatus(task);
     tdStatus.appendChild(selectStatus);

     const editForm = createElement("form");
     editForm.addEventListener("submit", (event) => {
          event.preventDefault();
          updateTask({ id, title: editInput.value, status });
     });

     const editInput = createElement("input");
     editInput.value = title;
     editForm.appendChild(editInput);

     const tdActions = createElement("td");
     const btnEdit = createBtnAction("edit");
     const btnDelete = createBtnAction("delete");
     tdActions.appendChild(btnEdit);
     tdActions.appendChild(btnDelete);
     btnDelete.addEventListener("click", () => {
          deleteTask(id);
     });

     btnEdit.addEventListener("click", () => {
          tdTitle.innerText = "";
          tdTitle.appendChild(editForm);
     });

     tr.appendChild(tdTitle);
     tr.appendChild(tdCreatedAt);
     tr.appendChild(tdStatus);
     tr.appendChild(tdActions);

     tbody.appendChild(tr);
}

async function loadTasks() {
     const tasks = await fetchTasks();
     tbody.innerHTML = "";

     if (tasks.length > 0) {
          document.querySelector("p.message-to-add-a-task").style.display = "none";
          tasks.forEach(task => createRow(task));
     }
}

loadTasks();