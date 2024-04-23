const express = require("express");
const router = express.Router();
const members = require("../../Members");

router.get("/", (req, res) => {
  res.json(members);
});

// Use + or parseInt() to convert params id to int
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === +req.params.id);

  if (found) {
    res.json(members.filter((member) => member.id === +req.params.id));
  } else {
    res.status(400).json({ mgs: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
