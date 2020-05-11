// SocketWrapper.js
const socketIO = require("socket.io");
const PTYWrapper = require("./PTYWrapper");

class SocketWrapper {
  constructor() {
    this.socket = null;
    this.pty = null;
  }

  attachServer(server) {
    if (!server) {
      throw new Error("Server not found...");
    }

    const io = socketIO(server);
    console.log("Created socket server, waiting for client connection...");
    io.on("connection", socket => {
      console.log("Client connected to socket...", socket.id);
      this.socket = socket;
      
      this.socket.on("disconnect", () => {
        console.log("Client disconnected from socket...", socket.id);
      });

      // create new pty service when client connects
      this.pty = new PTYWrapper(this.socket);

      // attach event listener for socket.io
      this.socket.on("input", input => {
        // input event emitted on client side
        this.pty.write(input);
      })
    });
  }
}

module.exports = SocketWrapper;
