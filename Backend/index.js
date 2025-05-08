const express = require("express");
const app = express();

// ENV Config
// For this to work create a .env file and then add PORT=8080
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log(`BACKEND TEST URL : http://localhost${port}`);
});
