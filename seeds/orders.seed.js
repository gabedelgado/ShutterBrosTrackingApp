const mongoose = require("mongoose");
const Order = require("../models/Order.model");

let orders = [
  {
    orderNumber: "10FX22DF88",
    customerName: "Julio Yates",
    jobAddress: "13085 SW 104 TER",
  },
  {
    orderNumber: "J71JJS0917",
    customerName: "Rosa Parks",
    jobAddress: "back of bus",
  },
  {
    orderNumber: "FJ83DD09KZ",
    customerName: "Nicolas Gomez",
    jobAddress: "3019 NW 37 ST",
  },
  {
    orderNumber: "DJ87YYX6SD",
    customerName: "Andres Gomez",
    jobAddress: "987 NW 36 ST",
  },
  {
    orderNumber: "7RE3HF76AF",
    customerName: "Esteban Delgado",
    jobAddress: "13887 SW 127 TER",
  },
  {
    orderNumber: "DJ87NXT514",
    customerName: "Fabio Fabio",
    jobAddress: "40392 SW 104 TER",
  },
  {
    orderNumber: "DL0988DHST",
    customerName: "Francisco Calleja",
    jobAddress: "14412 NW 88 PL",
  },
  {
    orderNumber: "ELS09DJE7W",
    customerName: "Anjelica Brens",
    jobAddress: "2341 SW 133 ST",
  },
  {
    orderNumber: "DKEI987S35",
    customerName: "Mario Bustamante",
    jobAddress: "4988 Balenciaga CT",
  },
  {
    orderNumber: "FJE8S76WQS",
    customerName: "Jennifer Hudson",
    jobAddress: "1000 Malibu Drive",
  },
];

mongoose
  .connect("mongodb://localhost/shutter-bros-tracking")
  .then((response) => {
    console.log(
      "connected to mongo database name: ",
      response.connections[0].name
    );
  })
  .catch((err) =>
    console.log("something went wrong connecting to database", err)
  );

Order.create(orders)
  .then((results) => {
    console.log("Saved the following movies successfully", results);
  })
  .catch((err) => {
    console.log("Something went wrong saving the seed files...", err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
