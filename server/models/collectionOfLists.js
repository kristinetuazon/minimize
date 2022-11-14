const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collectionOfLists = new Schema({
  nameOfCollection: String,
  userEmail: String,
  uId: String,
  initialList: [String],
  deletedIndex: [Number],
  finalIndex: [Number],
  maybeIndex: [Number],
  dateCreated: {type: Date, default: Date.now},
  dateUpdated: {type: Date, default: Date.now},}
);

module.exports = mongoose.model("List", collectionOfLists)