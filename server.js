var express = require("express");
//var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

// Requiring the `User` model for accessing the `users` collection
var User = require("./models/user.js");
var Post = require("./models/userpost.js");
// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
//app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/socialapp", { useNewUrlParser: true });

// Routes

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function(req, res) {
  console.log(req.body.username);
  // Create a new user using req.body
  User.create({
    userName: req.body.username
  })
    // .then(function(dbUser) {
    //   // If saved successfully, send the the new User document to the client
    //   return Post.findOneAndUpdate(
    //     {},
    //     { $push: { users: dbUser._id } },
    //     { new: true }
    //   );
    // })
    .then(function(dbPost) {
      res.json(dbPost);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

app.get("/userpost", function(req, res) {
  // Using our Book model, "find" every book in our db
  Post.find({})
    .then(function(dbPost) {
      // If any Books are found, send them to the client
      res.json(dbPost);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route to see what library looks like WITH populating
app.get("/populated", function(req, res) {
  // Using our Library model, "find" every library in our db and populate them with any associated books
  User.find({})
    // Specify that we want to populate the retrieved libraries with any associated books
    .populate("userpost")
    .then(function(dbuserPost) {
      // If any Libraries are found, send them to the client with any associated Books
      res.json(dbuserPost);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
