const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then((re) => {
      console.log("Connected to DB...");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDB;
