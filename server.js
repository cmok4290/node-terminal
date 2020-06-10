// server.js
"use strict";
const express = require("express");
const cors = require("cors");
const http = require("http");
const SocketWrapper = require("./SocketWrapper");

let httpPort = 8080;
let host = "http://127.0.0.1";

const app = express();
app.use(cors());

const httpServer = http.createServer(app);

httpServer.listen(httpPort, () => {
  console.log(`Server up at ${host}:${httpPort}...`);
  const socket = new SocketWrapper();
  socket.start(httpServer);
});

module.exports = app;
