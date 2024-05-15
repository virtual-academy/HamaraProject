const mongoose = require('mongoose');
require("dotenv").config();
// const MONGO_URL = "mongodb://127.0.0.1://"
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("database Not Connected...", );
  });