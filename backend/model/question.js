const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  options: [
    {
      type: String,
    },
  ],
  answer: {
    type: String,
  },
});
module.exports = mongoose.model("product", productSchema);
