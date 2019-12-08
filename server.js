const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const router = require("./routes/api/chat");

//Connect to Port
const PORT = process.env.PORT || 3001;

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(router);

// io.on("connection", function(socket) {
//   console.log("a user connected");
//   socket.on("chat message", function(msg) {
//     io.emit("chat message", msg);
//   });
// });

io.on("connection", socket => {
  console.log("a user is connected");

  socket.on("disconnect", () => {
    console.log("user left");
  });
});

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
} else {
  app.use(express.static("client/public"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/public/index.html"));
  });
}
io.listen(5001);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
