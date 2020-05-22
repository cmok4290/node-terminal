// server.js
'use strict';
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const SocketWrapper = require('./SocketWrapper');

// constants
let PORT = 443;
if (process.env.NODE_ENV !== 'production') {
  PORT = 8443;
}
const HOST = '127.0.0.1';

// app 
const app = express();
app.use(cors());

const privateKey = fs.readFileSync('./certs/server.key', 'utf8');
const certificate = fs.readFileSync('./certs/server.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};
const httpsServer = https.createServer(credentials, app);

app.use(cors());

// app
app.get('/', (req, res) => {
  res.send('Terminal Server Running...');
});

httpsServer.listen(PORT, () => {
  const socket = new SocketWrapper();
  socket.attachServer(https);
  console.log(`Running on https://${HOST}:${PORT}`);
});
