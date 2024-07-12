class TasksMiddleware {
     validateFieldTitle(req, res, next) {
          const { body } = req;

          if (!body.title)
               res.status(400).json({ message: "The field 'title' is obrigatory and cannot be empty" });

          if (body.title === "")
               res.status(400).json({ message: "The field 'title' cannot be empty" });

          next();
     }

     validateFieldStatus(req, res, next) {
          const { body } = req;

          if (!body.status)
               res.status(400).json({ message: "The field 'status' is obrigatory and cannot be empty" });

          if (body.status === "")
               res.status(400).json({ message: "The field 'status' cannot be empty" });

          next();

     }

}

module.exports = new TasksMiddleware(); 