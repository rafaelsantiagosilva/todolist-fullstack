const express = require('express');

const router = express.Router();

router.get("/tasks", (req, res) => res.status(200).send("Router is ok!"));

module.exports = router;