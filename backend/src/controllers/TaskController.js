const tasksModel = require("../models/Task");

class TaskController {
     async getAll(req, res) {
          try {
               const [tasks] = await tasksModel.getAll();
               return res.status(200).json(tasks);
          } catch (error) {
               return res.status(500).json({ error: error.message });
          }
     }

     async createTask(req, res) {
          try {
               const createdTask = await tasksModel.createTask(req.body);
               return res.status(201).json(createdTask);
          } catch (error) {
               return res.status(500).json({ error: error.message });
          }
     }
}


module.exports = new TaskController(); 