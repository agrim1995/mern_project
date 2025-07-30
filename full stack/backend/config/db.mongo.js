const mongoose = require("mongoose");
const connectMongoDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/mean_prod");
 console.log("MongoDB connected");
};
module.exports = connectMongoDB;



