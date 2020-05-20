// server.js
'use strict';
const app = require('express')();
const cors = require('cors');
const fs = require('fs');
const http = require('http').createServer(app);
const options = {
  cert: fs.readFileSync("./cert.pem"),
  key: fs.readFileSync("./key.pem"),
  ca: fs.readFileSync("./ca.pem")
};
const https = require('https').createServer(options, app);
const SocketWrapper = require('./SocketWrapper');

// constants
const HTTP_PORT = 80;
const HTTPS_PORT = 443;
const HOST = '127.0.0.1';

app.use(cors());

// app
app.get('/', (req, res) => {
  res.send('Terminal Server Running...');
});

http.listen(HTTP_PORT, () => {
  //const socket = new SocketWrapper();
  //socket.attachServer(http);
  console.log(`Running on http://${HOST}:${HTTP_PORT}`);
});

https.listen(HTTPS_PORT, () => {
  const socket = new SocketWrapper();
  socket.attachServer(https);
  console.log(`Running on https://${HOST}:${HTTP_PORT}`);
});
