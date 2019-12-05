import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:5001");
function subscribeToTimer(cb) {
  socket.on("timer", timestamp => cb(null, timestamp));
  socket.emit("subscribeToTimer", 1000);
}
function readChat(cb) {
  console.log("about to read chat");
  socket.on("chat message", function(msg) {
    cb(msg);
  });
}
function sendChat(msg) {
  console.log("about to send chat");
  socket.emit("chat message", msg);
}

export { subscribeToTimer, readChat, sendChat };
