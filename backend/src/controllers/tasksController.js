function getAll(req, res) {
     try {
          return res.status(200).json({ message: 'Controller is ok!' });
     } catch {
          return res.status(500).json({ message: 'ERROR: Controller is not ok!' });
     }
}

module.exports = {
     getAll
}