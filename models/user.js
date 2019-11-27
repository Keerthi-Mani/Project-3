const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    unique: true
  },
  about: {
    type: String,
    trim: true
  },
  photo: {
    data: Buffer,
    contentType: String
  }
});
const User = mongoose.model("User", userSchema);
module.exports = User;
