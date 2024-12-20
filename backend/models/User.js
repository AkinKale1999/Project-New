const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: String,
  Family_Name: String,
  Username: { type: String, unique: true },
  Alter: Number,
  Email: { type: String, unique: true },
  Password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
