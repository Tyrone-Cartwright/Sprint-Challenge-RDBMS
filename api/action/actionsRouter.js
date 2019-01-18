const express = require("express");
const helpers = require("../../data/helpers/helperFunction.js");
const router = express.Router();

router.get("/", (req, res) => {
  helpers
    .getActions()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(() => {
      res.status(500).json({ error: `Couldn't retrieve actions. Try again.` });
    });
});

router.post("/", (req, res) => {
  helpers
    .addAction(req.body)
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
