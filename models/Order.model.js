const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  orderNumber: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  jobAddress: { type: String, required: true },
  trackingStatus: {
    type: String,
    enum: [
      "Processing Order",
      "Products Ordered",
      "Products Received",
      "Ready to Install",
    ],
    default: "Processing Order",
  },
  permitStatus: {
    type: String,
    enum: ["Pending", "Submitted", "In-progress", "Revisions", "Completed"],
    default: "Pending",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
