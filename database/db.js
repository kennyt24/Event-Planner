const mongoose = require('mongoose')

const { MONGODB_URI } = process.env;

exports.connectDB = () => {
    // Connecting to the database
    mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true
      })
      .then(() => {
        console.log("Successfully connected to database");
      })
      .catch((error) => {
        console.log("database connection failed. exiting now..."+error);
        process.exit(1);
      });
  };