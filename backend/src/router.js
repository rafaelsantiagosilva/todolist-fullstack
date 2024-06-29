const express = require('express');
const tasksController = require('./controllers/tasksController');

const router = express.Router();

router.get("/tasks", (req, res) => tasksController.getAll(req, res));

module.exports = router;