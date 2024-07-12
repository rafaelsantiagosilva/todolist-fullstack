const connection = require('./connection');

class TaskModel {
     async createTask(task) {
          const { title } = task;
          const dateUTC = new Date(Date.now()).toUTCString();

          const sql = "INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)";
          const [createdTask] = await connection.execute(sql, [title, "pendente", dateUTC]);

          return { insertId: createdTask.insertId };
     }

     async getAll() {
          const [tasks] = await connection.execute("SELECT * FROM tasks");
          return tasks;
     }

     async updateTask(id, task) {
          const sql = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";
          const { title, status } = task;
          const [updatedTask] = await connection.execute(sql, [title, status, id]);
     }

     async deleteTask(id) {
          const [removedTask] = await connection.execute("DELETE FROM tasks WHERE id = ?", [id]);
          return removedTask;
     }
}

module.exports = new TaskModel(); 