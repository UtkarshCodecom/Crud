const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  Name: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Product", productSchema);