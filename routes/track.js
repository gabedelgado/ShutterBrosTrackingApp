var express = require("express");
var router = express.Router();
const Order = require("../models/Order.model");
router.get("/search-order", (req, res) => {
  res.render("search-order");
});
router.get("/order-lookup", (req, res) => {
  console.log("looking for : ", req.query.orderNum);
  //find stuff on db
  Order.findOne({ orderNumber: req.query.orderNum })
    .then((results) => {
      // if results null redirect back to search page with message !
      console.log(results);
      if (results) {
        res.render("view-order", { results });
      }
    })
    .catch((err) => {});
  //load up result page
});

module.exports = router;
