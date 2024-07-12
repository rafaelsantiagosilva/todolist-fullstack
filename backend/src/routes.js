const express = require('express');
const taskController = require("./controllers/TaskController");
const tasksMiddleware = require("./middlewares/TasksMiddleware");

const router = express.Router();

router.get('/tasks', taskController.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, taskController.createTask);
router.delete('/tasks/:taskId', taskController.deleteTask);
router.put('/tasks/:taskId', tasksMiddleware.validateFieldTitle, tasksMiddleware.validateFieldStatus, taskController.updateTask);

module.exports = router; 