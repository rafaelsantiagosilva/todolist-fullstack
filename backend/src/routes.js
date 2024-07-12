const express = require('express');
const taskController = require("./controllers/TaskController");
const tasksMiddleware = require("./middlewares/TasksMiddleware");

const router = express.Router();

router.get('/tasks', taskController.getAll);
router.post('/tasks', tasksMiddleware.validateBody, taskController.createTask);
router.delete('/tasks/:taskId', taskController.deleteTask);

module.exports = router; 