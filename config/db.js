const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL;

async function dbConnection() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = dbConnection;
