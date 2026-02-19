const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["Seller", "Buyier"],
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);