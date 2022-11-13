const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {createUserWithEmailAndPassword} = require('firebase/auth');
const authController = require("./controllers/authController")
// const { auth } = require('../firebase-config');
require("dotenv").config();
const uri = process.env.MONGODB_CONNECTION_STRING;

function setupServer() {
  const app = express();

  app.use(express.json());
  app.use(cors());
  // app.use(express.static(path.resolve(__dirname, '../client/build')));
  app.use('/api/auth', authController);

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("Hello from mongoDB");
  });



  // app.post('/api/auth/register', async(req, res) => {
  //   const {email, password} = req.body
  //   const newUser = await createUserWithEmailAndPassword(auth, email, password);
  //   //console.log(newUser);
  //   res.json({"payload": newUser}).status(200);
  // })


  return app;
}

module.exports = setupServer;
