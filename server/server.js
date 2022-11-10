const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const uri = process.env.MONGODB_CONECTION_STRING;
const uri = "mongodb+srv://minimizeadmin:almondMilk0@minimize-cluster.zbdzeky.mongodb.net/?retryWrites=true&w=majority"

function setupServer() {
    const app = express();

    app.use(express.json());

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const connection = mongoose.connection;
    connection.once("open", () => {
        console.log("Hello from mongoDB")
    })

    
    app.get("/hello", (req, res) => {
        res.status(200).send("hello");
      });

    return app;
}

module.exports = setupServer;