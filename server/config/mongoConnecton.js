const mongoose = require("mongoose");

const mongoURI = `${process.env.MONGO_URL}/deepnetsoft`;

mongoose
  .connect(mongoURI)
  .then(() => console.log("Server connected to MongoDB"))
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err.message);
  });

module.exports = mongoose.connection;
