const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const app = express();
//path.resolve()
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 3000;
const db = mysql.createConnection({
  host: "localhost",
  user: "Angelo",
  password: "4410",
  database: "DTI_Task",
});

app.listen(port, () => {
  console.log(`listening on port ${port} `);
});