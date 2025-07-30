const Product = require("../models/product.model");

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// add updateProduct and deleteProduct similarly
