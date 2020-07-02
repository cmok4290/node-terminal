// server.js
"use strict";
const express = require("express");
const cors = require("cors");
const http = require("http");
const SocketWrapper = require("./SocketWrapper");

let httpPort = 8080;
let host = "http://127.0.0.1";
let origins = [
  "http://localhost:3000",
  "https://localhost:3000",
  "http://cmok.dev",
  "https://cmok.dev",
];

const app = express();
app.use(
  cors({
    origin: (origin, callback) => {
      if (origins.indexOf(origin) === -1) {
        const message =
          "The CORS policy for this origin doesn't allow access from that particular origin.";
        return callback(new Error(message), false);
      }
      return callback(null, true);
    },
  })
);

const httpServer = http.createServer(app);

httpServer.listen(httpPort, () => {
  console.log(`Server up at ${host}:${httpPort}...`);
  const socket = new SocketWrapper();
  socket.start(httpServer);
});

module.exports = app;
