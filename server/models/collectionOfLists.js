const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collectionOfLists = new Schema({
  nameOfList: String,
  userEmail: String,
  uId: String,
  listDescription: String,
  initialList: [
    new Schema({
    itemName: String
  })
],
  deletedList: [
    new Schema({
    itemName: String
  })
],
  finalList: [
    new Schema({
    itemName: String
  })
],
  maybeList: [
    new Schema({
    itemName: String
  })
],
  dateCreated: {type: Date, default: Date.now},
  dateUpdated: {type: Date, default: Date.now},}
);



module.exports = mongoose.model("List", collectionOfLists)