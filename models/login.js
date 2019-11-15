const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: String,
  password: { type: String, required: true }
});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login