const tasksModel = require("../models/Task");

class TaskController {
     async getAll(req, res) {
          try {
               const tasks = await tasksModel.getAll();
               return res.status(200).json(tasks);
          } catch (error) {
               return res.status(500).json({ error: error.message });
          }
     }
}


module.exports = new TaskController(); 