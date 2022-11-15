const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collectionOfLists = new Schema({
  nameOfList: String,
  userEmail: String,
  uId: String,
  listDescription: String,
  initialList: [{id: Number, itemName: String}],
  deletedId: [Number],
  finalId: [Number],
  maybeId: [Number],
  dateCreated: {type: Date, default: Date.now},
  dateUpdated: {type: Date, default: Date.now},}
);

module.exports = mongoose.model("List", collectionOfLists)