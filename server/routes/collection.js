const express = require("express");
const { postList, getList, getMemberLists, getMemberLatestList, getMemberListById} = require("../controllers/collection");

const router = express.Router();

//post endpoints
router.post("/add", postList)

//get endpoints
router.get("/getlist", getList)
router.get("/getlist/member/:uId", getMemberLists)
router.get("/getlist/member/:uId/latest", getMemberLatestList)
router.get("/getlist/member/:uId/list/:id", getMemberListById)

module.exports = router;