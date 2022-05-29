let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Personal Model
let personalSchema = require("../models/personalDetails");

// CREATE PersonalDetails
router.route("/personalDetails").post((req, res, next) => {
  personalSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
// READ PersonalDetails
router.route("/").get((req, res) => {
  personalSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
