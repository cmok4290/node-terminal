// server.js
"use strict";
const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const SocketWrapper = require("./SocketWrapper");

let httpPort = process.env.PORT || 8080;
let host = process.env.HOST || "http://127.0.0.1";
let origins = [
  "http://localhost:3000",
  "https://localhost:3000",
  "http://cmok.dev",
  "https://cmok.dev",
];

const app = express();
app.use(
  cors({
    origin: origins,
  })
);

const httpServer = http.createServer(app);

httpServer.listen(httpPort, () => {
  console.log(`Server up at ${host}:${httpPort}...`);
  const socket = new SocketWrapper();
  socket.start(httpServer);
});

module.exports = app;
