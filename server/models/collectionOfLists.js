const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collectionOfLists = new Schema({
  nameOfList: String,
  userEmail: String,
  uId: String,
  listDescription: String,
  initialList: [
    new Schema({
    id: String,
    itemName: String
  })
],
  deletedList: [
    new Schema({
    id: String,
    itemName: String
  })
],
  finalList: [
    new Schema({
    id: String,
    itemName: String
  })
],
  maybeList: [
    new Schema({
    id: String,
    itemName: String
  })
],
  dateCreated: {type: Date, default: Date.now},
  dateUpdated: {type: Date, default: Date.now},}
);



module.exports = mongoose.model("List", collectionOfLists)