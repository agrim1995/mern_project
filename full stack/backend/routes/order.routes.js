module.exports = function (app) {
  const express = require("express");
  const router = express.Router();

  // Example order route
  router.get("/orders", (req, res) => {
    res.send("All orders");
  });

  app.use("/api", router);
};
