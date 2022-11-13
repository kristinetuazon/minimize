const setupServer = require("./server");
// const { auth } = require('../firebase-config');
const PORT = process.env.PORT || 4000;
const server = setupServer();
// const mongoose = require("mongoose");
// require("dotenv").config();
// const uri = process.env.MONGODB_CONNECTION_STRING;


(() => {
  server.listen(PORT, () => {
    console.log(`app is listening @ http://localhost:${PORT}`);
  });

//  mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
  
//   const connection = mongoose.connection;
//   connection.once("open", () => {
//     console.log("Hello from mongoDB");
//   });
})();
