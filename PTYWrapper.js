// PTYWrapper.js
"use strict";
const os = require("os");
const pty = require("node-pty");

class PTYWrapper {
  /**
   * A wrapper for each pseudo-terminal process
   * and socket connection.
   */
  constructor(socket) {
    this.shell = process.env[os.platform() === "win32" ? "COMSPEC" : "SHELL"];
    this.socket = socket;
    this.ptyProcess = null;
  }

  start() {
    // initialize node-pty with an appropriate shell
    this.ptyProcess = pty.spawn(this.shell, [], {
      name: "xterm-color",
      cols: 80,
      rows: 20,
      cwd: process.cwd(),
      env: process.env,
    });

    // data event listener
    this.ptyProcess.on("data", (data) => {
      // emit data on socket output event
      this.socket.emit("output", data);
    });
  }

  // write input from socket client to pseudo-terminal process
  write(data) {
    this.ptyProcess.write(data);
  }
}

module.exports = PTYWrapper;
