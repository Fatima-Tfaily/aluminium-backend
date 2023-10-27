require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/db");
const routes = require("./routes/index");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/", require("./routes/index"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/kitchen", routes);
app.use("/other", routes);
app.use("/facade", routes);
app.use("/cabinets", routes);
app.use("/login", routes);

app.listen(port, () => {
  dbConnection();
  console.log(`Example app listening on port ${port}`);
});
