const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  brand: {
    type: String,
  },
  model: {
    type: String
  },
  type: {
    butt: {
      type: String
    },
    shaft: {
      type: String
    }
  },
  length: {
    type: Number
  },
  joint: {
    type: String
  },
  price: {
    type: Number
  },
  picture: {
      type: String
  }
});

module.exports = mongoose.model("products", productSchema);
