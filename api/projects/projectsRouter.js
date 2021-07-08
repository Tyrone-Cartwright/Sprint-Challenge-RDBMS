const express = require("express");
const db = require("../../data/helpers/helperFunction.js");
const router = express.Router();

router.get("/:id", (req, res) => {
  db.getProjectById(req.params.id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res
          .status(404)
          .json({ error: `Couldn't find project with specified ID.` });
      }
    })
    .catch(() => {
      res.status(500).json({ error: `Couldn't retrieve projects. Try again.` });
    });
});

router.get("/", (req, res) => {
  db.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(() => {
      res.status(500).json({ error: `Couldn't retrieve projects. Try again.` });
    });
});

router.post("/", (req, res) => {
  db.addProject(req.body)
    .then(id => {
      res.status(201).json({ id: id[0], ...req.body });
    })
    .catch(() => {
      res.status(500).json({
        error: `Couldn't add project to database. Make sure to include a name.`
      });
    });
});

module.exports = router;
