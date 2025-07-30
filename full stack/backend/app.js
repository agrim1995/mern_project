const express = require("express");
const app = express();
const cors = require("cors");
const connectMongoDB = require("./config/db.mongo");
const dbMysql = require("./config/db.mysql");
require("dotenv").config();

app.use(cors());
app.use(express.json());

// Connect databases
connectMongoDB();

// Register routes
require("./routes/product.routes")(app);
require("./routes/user.routes")(app);
require("./routes/order.routes")(app);
require("./routes/weather.routes")(app);

// Start server
app.listen(3000, () => console.log("Server started on port 3000"));
