var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/search-order", (req, res) => {
  res.render("search-order");
});

router.get("/admin-login", (req, res) => {
  res.render("admin-login");
});

router.get("/order-lookup", (req, res) => {
  console.log("looking for : ", req.query.orderNum);
  //find stuff on db
  //load up result page
});

router.post("/admin-login", (req, res) => {
  console.log("logging password of : ", req.body.password);
  //pull up all orders
  //load up results page
});

module.exports = router;
