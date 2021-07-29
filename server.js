const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || "3000");

var key = fs.readFileSync(__dirname + "/localhost.key");
var cert = fs.readFileSync(__dirname + "/localhost.crt");
var options = {
  key,
  cert,
};

app = express();

app.use("/", express.static(path.join(__dirname, "public")));

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port);
});
