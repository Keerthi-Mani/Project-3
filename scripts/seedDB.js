const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/socialapp");

const postSeed = [
  {
    posts: "Doing project 3",
    comment: "Hello",
    date: new Date(Date.now())
  }
];

const userSeed = [
  {
    userName: "Shital"
  }
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + "records inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + "records inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
