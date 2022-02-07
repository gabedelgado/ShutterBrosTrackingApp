var express = require("express");
var router = express.Router();
const Order = require("../models/Order.model");
var helpers = require("handlebars-helpers")();
var session;
const thepassword = "password1";
const trackingOptions = [
  "Processing Order",
  "Products Ordered",
  "Products Received",
  "Ready to Install",
];
const permitOptions = [
  "Pending",
  "Submitted",
  "In-progress",
  "Revisions",
  "Completed",
];

router.get("/login", (req, res) => {
  session = req.session;
  if (session.email) {
    res.redirect("view-orders");
  } else {
    res.render("admin-login");
  }
});

router.post("/login", (req, res) => {
  console.log("logging password of : ", req.body.password);
  if (req.body.password === thepassword) {
    session = req.session;
    session.email = "valid@email.com";
    res.redirect("view-orders");
  } else {
    res.redirect("login");
  }
});

router.get("/view-orders", (req, res) => {
  session = req.session;
  if (session.email) {
    Order.find()
      .then((results) => {
        console.log(results);
        res.render("admin-view-orders", { results });
      })
      .catch((err) => {
        console.log("something went wrong", err);
      });
  } else {
    res.redirect("login");
  }
});

router.get("/:id/edit", (req, res) => {
  session = req.session;
  if (session.email) {
    Order.findById(req.params.id)
      .then((results) => {
        res.render("admin-edit-order", {
          results,
          trackArray: trackingOptions.map((value) =>
            results.trackingStatus === value ? true : false
          ),
          permitArray: permitOptions.map((value) =>
            results.permitStatus === value ? true : false
          ),
        });
      })
      .catch((err) => {
        console.log("something went wrong pulling up the edit order page", err);
      });
  } else {
    res.redirect("login");
  }
});

module.exports = router;
