const express = require("express");
const db = require("../../data/helpers/helperFunction.js");
const router = express.Router();

router.get("/", (req, res) => {
  db.getActions()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(() => {
      res.status(500).json({ error: `Couldn't retrieve actions. Try again.` });
    });
});

router.post("/", (req, res) => {
  db.addAction(req.body)
    .then(id => {
      res.status(201).json({ id: id[0], ...req.body });
    })
    .catch(() => {
      res.status(500).json({
        error: `Couldn't add action to database. Make sure to include a description and project_id.`
      });
    });
});

module.exports = router;
