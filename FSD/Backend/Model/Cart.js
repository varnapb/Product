const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },     // ✅ Correct model name
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // ✅ Correct model name
  quantity: { type: Number, default: 1 } // ✅ Optional: quantity support
});

const CartModel = mongoose.model("cart", cartSchema);
module.exports = CartModel;
