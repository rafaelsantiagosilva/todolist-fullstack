class TasksMiddleware {
     validateBody(req, res, next) {
          const { body } = req;

          if (!body.title)
               res.status(400).json({ message: "The field 'title' is obrigatory and cannot be empty" });

          if (body.title === "")
               res.status(400).json({ message: "The field 'title' cannot be empty" });

          next();
     }
}

module.exports = new TasksMiddleware(); 