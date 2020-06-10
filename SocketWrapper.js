// SocketWrapper.js
"use strict";
const socketio = require("socket.io");
const PTYWrapper = require("./PTYWrapper");

class SocketWrapper {
  /**
   * A wrapper for each socket connection
   * and pseudo-terminal process.
   */
  constructor() {
    this.socket = null;
    this.pty = null;
  }

  start(server) {
    const io = socketio(server);
    console.log("created socket server, awaiting client connection...");

    io.on("connection", (socket) => {
      // bind socket to object instance
      this.socket = socket;
      console.log("client connected to", this.socket.id);

      // create pseudo-terminal process with socket to bind to
      this.pty = new PTYWrapper(this.socket);
      this.pty.start();

      // socket events
      this.socket.on("input", (input) => {
        this.pty.write(input);
      });
      this.socket.on("disconnect", (data) => {
        console.log("client disconnected from", this.socket.id);
      });
    });
  }
}

module.exports = SocketWrapper;
