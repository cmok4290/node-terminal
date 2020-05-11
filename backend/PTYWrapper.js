// PTYWrapper.js
const os = require('os');
const pty = require('node-pty');

class PTYWrapper {
  constructor(socket) {
    // uncomment for user os
    // os.platform() === 'win32' ? 'powershell.exe' : 'bash';
    this.shell = 'bash';
    this.ptyProcess = null;
    this.socket = socket;

    this.startPTYProcess();
  }

  /**
   * Spawn instance of pty with shell
   */
  startPTYProcess() {
    this.ptyProcess = pty.spawn(this.shell, [], {
      name: 'xterm-color',
      cwd: process.env.HOME,
      env: process.env
    });

    // data event listener
    this.ptyProcess.on('data', data => {
      // send terminal data output to socket.io client
      this.sendToClient(data);
    });
  }

  /**
   * Sends input to pseudo terminal process
   */
  write(data) {
    this.ptyProcess.write(data);
  }

  sendToClient(data) {
    // emit data to socket.io client in an event output
    this.socket.emit('output', data);
  }
}

module.exports = PTYWrapper;

