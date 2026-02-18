const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  yearsUsed: { type: Number, required: true },
  phone: { type: String, required: true },
  image: { type: String, required: true },
  sellerEmail: { type: String, required: true },
  sold: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Item", itemSchema);