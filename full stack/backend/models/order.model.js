const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  userId: Number, // From MySQL
  productIds: [String],
  totalAmount: Number
});
module.exports = mongoose.model("Order", OrderSchema);
