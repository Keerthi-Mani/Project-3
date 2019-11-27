//Dependencies
const mongoose = requir("mongoose");
const config = require("config");
const db = config.get("mongoURI");

//promise
// mongoose.connect(db);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};
