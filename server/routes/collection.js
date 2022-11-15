const express = require("express");
const { postList, getList } = require("../controllers/collection");

const router = express.Router();

router.post("/add", postList)
router.get("/", getList)

module.exports = router;

// recordRoutes.route("/sorthistory").get(async function (req, res) {
//     const dbConnect = dbo.getDb();
  
//     dbConnect
//       .collection("listingsAndReviews")
//       .find({}).limit(50)
//       .toArray(function (err, result) {
//         if (err) {
//           res.status(400).send("Error fetching listings!");
//        } else {
//           res.json(result);
//         }
//       });
//   });

//   recordRoutes.route("/sort/recordSwipe").post(function (req, res) {
//     const dbConnect = dbo.getDb();
//     const matchDocument = {
//       user_id: req.body.user_id,
//       collection_id: req.body.collection_id,
//       collection_name: req.body.collection_name,
//       item: req.body.item,
//       last_modified: new Date(),
//       direction: req.body.direction
//     };
  
//     dbConnect
//       .collection("yes")
//       .insertOne(matchDocument, function (err, result) {
//         if (err) {
//           res.status(400).send("Error inserting matches!");
//         } else {
//           console.log(`Added a new match with id ${result.insertedId}`);
//           res.status(204).send();
//         }
//       });
//   });