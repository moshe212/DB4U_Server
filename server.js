const http = require("http");
const https = require("https");
const express = require("express");
// const fs = require("fs");
const app = express();
// const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const server = http.createServer(app);

dotenv.config();
// app.use(bodyParser.json());

app.use(cors());

const { DB4U_Func } = require("./DB4U_Func");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.get("/api/GetConnList", async (req, res) => {
  console.log(req.body);
  const Data = await DB4U_Func.getSqldata();
  res.send(["OK", Data]);
});

// connectToDB().then(() => {
server.listen(port, () => {
  console.log("Example app listening on port " + port);

  //   });
});
