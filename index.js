const express = require("express");
require("dotenv").config();

const port = process.env.port || 3000;

const app = express();
const bodyParser = require("body-parser");
//
require("./db");
require("./models/User");
//
const authRoutes = require("./routs/authRoute");
const requireToken = require("./Middelwares/AuthTokenRequir");
//
app.use(bodyParser.json());
app.use(authRoutes);
//

app.get("/", requireToken, (req, res) => {
  res.send("This is home page");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
