const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  pNumber: Number,
  email: String,
  fname: String,
  lname: String,
});

module.exports = mongoose.model("users", UserSchema);
