// server.js
'use strict';
const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const helmet = require('helmet');
const http = require('http');
// const https = require('https');
const SocketWrapper = require('./SocketWrapper');

let httpPort = 8080;
let httpsPort = 8443;
let host = 'http://127.0.0.1';

// app 
const app = express();
// app.use(cors());
// app.use(helmet());
// app.use(express.static('static'));

// const key = fs.readFileSync('./sslcert/privkey.pem');
// const cert = fs.readFileSync('./sslcert/fullchain.pem');
// const dhparam = fs.readFileSync('./sslcert/dh-strong.prm')
// const options = {key, cert, dhparam};
const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);


// listen on ports
httpServer.listen(httpPort, () => {
  console.log(`http server up at ${host}:${httpPort}...`);
  const socket = new SocketWrapper();
  socket.attachServer(httpServer);
});


// httpsServer.listen(httpsPort, () => {
//   console.log(`http server up at ${host}:${httpPort}...`);
//   const socket = new SocketWrapper();
//   socket.attachServer(httpServer);
// });

