const mongoose = require("mongoose");
const UserSchame = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    require: true
  },
  active: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("User", UserSchame);