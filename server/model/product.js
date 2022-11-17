const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    catagories: {
      type: [String],
      required: true,
    },
    size: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: [String],
    },
    inStock: {
      type: Boolean,
      default :true
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product",productSchema);
module.exports = Product