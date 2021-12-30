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

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.get("/api/GetConnList", async (req, res) => {
  console.log(req.body);

  res.send("OK");
});

// connectToDB().then(() => {
server.listen(port, () => {
  console.log("Example app listening on port " + port);

  //   });
});
