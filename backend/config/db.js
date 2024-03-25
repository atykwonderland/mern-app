// db.js
require("dotenv").config();
const { MONGO_URL } = process.env;

const mongoose = require("mongoose");

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;