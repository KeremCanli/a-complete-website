"use strict";
const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose.connect("mongodb://localhost:27017/a-complete-website", {
    useNewUrlParser: true
  });
  mongoose.connection.on("open", () => {
    console.log("Connected to the database.");
  });
  mongoose.connection.on("error", error => {
    console.log("Could not connect to database.", error);
  });
}

module.exports = connectToDatabase;