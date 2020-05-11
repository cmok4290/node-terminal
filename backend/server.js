// server.js
'use strict';
const app = require('express')();
const http = require('http').createServer(app);
const SocketWrapper = require('./SocketWrapper');

// constants
const PORT = 8080;
const HOST = '127.0.0.1';

// app
app.get('/', (req, res) => {
  res.send('Terminal Server Running...');
});

http.listen(PORT, () => {
  const socket = new SocketWrapper();
  socket.attachServer(http);
  console.log(`Running on http://${HOST}:${PORT}`);
});
