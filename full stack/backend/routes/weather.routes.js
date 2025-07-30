module.exports = function (app) {
  const express = require("express");
  const router = express.Router();

  // Example weather route
  router.get("/weather", (req, res) => {
    res.send("Weather info");
  });

  app.use("/api", router);
};
