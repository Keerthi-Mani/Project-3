import openSocket from "socket.io-client";
const SOCKET_PORT = process.env.PORT || 3001;
// const socket = openSocket("localhost:5001");
const LOCALHOST = "localhost";
const ENDPOINT =
  window.location.hostname === LOCALHOST
    ? `${LOCALHOST}:${SOCKET_PORT}`
    : "https://gentle-island-67954.herokuapp.com/";

console.log(" ENDPOINTS :", ENDPOINT);

const socket = openSocket(ENDPOINT);
function readChat(cb) {
  socket.on("chat message", function(msg) {
    cb(msg);
  });
}
function sendChat(msg) {
  socket.emit("chat message", msg);
}

export { readChat, sendChat };
