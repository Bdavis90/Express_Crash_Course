const express = require("express");
const path = require("path");
const app = express();
const logger = require("./middleware/logger");

// Init middleware
app.use(logger);

// Body parser middleware
app.use(express.json());
// For form submissions
app.use(express.urlencoded({ extended: "false" }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Member API Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
