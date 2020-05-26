// server.js
'use strict';
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const helmet = require('helmet');
const https = require('https');
const SocketWrapper = require('./SocketWrapper');

let httpPort = 80;
let httpsPort = 443;
let host = 'https://cmok.dev';

if (process.env.NODE_ENV !== 'production') {
  httpPort = 8080;
  httpsPort = 8443;
  host = '127.0.0.1';
}

// app 
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.static('static'));

const key = fs.readFileSync('/var/www/cmok/sslcert/privkey.pem');
const cert = fs.readFileSync('/var/www/cmok/sslcert/fullchain.pem');
const dhparam = fs.readFileSync('/var/www/cmok/sslcert/dh-strong.prm')
const options = {key, cert, dhparam};
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.use(cors());

app.get('/', (req, res) => {
  res.redirect('https://' + req.headers.host + req.url);
});

httpServer.listen(httpPort);

httpsServer.listen(httpsPort, () => {
  const socket = new SocketWrapper();
  socket.attachServer(https);
  console.log(`Running on https://${HOST}:${PORT}`);
});
