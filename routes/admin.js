var express = require("express");
var router = express.Router();

var session;
const thepassword = "password1";

router.get("/login", (req, res) => {
  session = req.session;
  if (session.email) {
    res.render("admin-view-all");
  } else {
    res.render("admin-login");
  }
});

router.post("/login", (req, res) => {
  console.log("logging password of : ", req.body.password);
  if (req.body.password === thepassword) {
    session = req.session;
    session.email = "valid@email.com";
    res.render("admin-view-all");
  } else {
    res.render("admin-login");
  }
  //pull up all orders
  //load up results page
});

module.exports = router;
