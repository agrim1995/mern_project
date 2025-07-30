module.exports = function (app) {
  const express = require("express");
  const router = express.Router();

  // Example user route
  router.get("/users", (req, res) => {
    res.send("All users");
  });

  app.use("/api", router);
};
