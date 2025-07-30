module.exports = function (app) {
  const express = require("express");
  const router = express.Router();

  // Dummy product data for now (replace with DB later if needed)
  const dummyProducts = [
    { _id: "1", name: "Laptop", description: "A powerful laptop", price: 1000 },
    { _id: "2", name: "Phone", description: "A smart phone", price: 500 },
    { _id: "3", name: "Tablet", description: "A nice tablet", price: 750 }
  ];

  router.get("/products", (req, res) => {
    res.json(dummyProducts); 
  });

  app.use("/api", router);
};
