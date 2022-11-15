const setupServer = require("./server");

const PORT = process.env.PORT || 4001;
const server = setupServer();
// const mongoose = require("mongoose");
// require("dotenv").config();
// const uri = process.env.MONGODB_CONNECTION_STRING;


(() => {
  server.listen(PORT, () => {
    console.log(`app is listening @ http://localhost:${PORT}`);
  });
})();
