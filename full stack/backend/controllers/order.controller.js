const Order = require("../models/order.model");

exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
};

exports.getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
};
