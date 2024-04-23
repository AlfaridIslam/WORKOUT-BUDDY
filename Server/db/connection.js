const mongoose = require("mongoose");
// Load .env file
require('dotenv').config();

// Access the MongoDB connection string
const mongodbUri = process.env.MONGODB_URI;

mongoose
  .connect(mongodbUri)
  .then(() => {
    console.log("Connection is Established");
  })
  .catch((err) => {
    console.log(`Error is : ${err}`);
  });
