const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//app.get("/", (req, res) => res.send("API Running"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

//Connect to Port
const PORT = process.env.PORT || 3000;

//Connect to mongoose
mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGOBD_URI || "mongodb://localhost/friendconnector",
  {
    useNewUrlParser: true
  }
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
