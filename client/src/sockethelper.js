import openSocket from "socket.io-client";
const socket = openSocket("localhost:5001");
function readChat(cb) {
  socket.on("chat message", function(msg) {
    cb(msg);
  });
}
function sendChat(msg) {
  socket.emit("chat message", msg);
}

export { readChat, sendChat };
