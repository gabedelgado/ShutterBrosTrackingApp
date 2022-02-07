var express = require("express");
var router = express.Router();

router.get("/search-order", (req, res) => {
  res.render("search-order");
});
router.get("/order-lookup", (req, res) => {
  console.log("looking for : ", req.query.orderNum);
  //find stuff on db
  //load up result page
});

module.exports = router;
