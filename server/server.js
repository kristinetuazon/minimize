const express = require("express");
const mongoose = require("mongoose");
const collection = require("./routes/collection")
const cors = require("cors");
require("dotenv").config();

const uri = process.env.MONGODB_CONNECTION_STRING;

function setupServer() {
  const app = express();


  //middlewares
  app.use(express.json());
  app.use(cors());

  app.use('/collection', collection)


  //mongoose connection
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("Hello from mongoDB");
  });



  return app;
}

module.exports = setupServer;
