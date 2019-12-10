import openSocket from "socket.io-client";
const SOCKET_PORT = process.env.PORT || 3001;
// const socket = openSocket("localhost:5001");

const socket = openSocket(window.location.hostname + `:${SOCKET_PORT}`);
function readChat(cb) {
  socket.on("chat message", function(msg) {
    cb(msg);
  });
}
function sendChat(msg) {
  socket.emit("chat message", msg);
}

export { readChat, sendChat };
