const connection = require('../connection/connection');

class Task {
     async getAll() {
          const tasks = await connection.execute("SELECT * FROM tasks");
          return tasks;
     }
}

module.exports = new Task(); 