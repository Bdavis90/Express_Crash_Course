const express = require("express");
const path = require("path");
const app = express();
const members = require("./Members");
const logger = require("./middleware/logger");

// Init middleware
app.use(logger);

app.get("/api/members", (req, res) => {
  res.json(members);
});

// Use + or parseInt() to convert params id to int
app.get("/api/members/:id", (req, res) => {
  const found = members.some((member) => member.id === +req.params.id);

  if (found) {
    res.json(members.filter((member) => member.id === +req.params.id));
  } else {
    res.status(400).json({ mgs: `No member with the id of ${req.params.id}` });
  }
});

// Set static folder

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
