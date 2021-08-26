const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
  productCode: {
    require: [true, "need a productCode"],
    type: String,
    unique: 1,
    maxlength: 250,
  },
  name: {
    require: [true, "need a name"],
    type: String,
    unique: 1,
    maxlength: 250,
  },
  woodtype: {
    type: String,
    required: true
  },
  brand: {
    require: [true, "need a brand"],
    type: Schema.Types.ObjectId,
    ref: "Brand",
  },
  description: {
    require: [true, "need a description"],
    type: String,
    maxlength: 1000,
  },
  price: {
    require: true,
    type: Number,
    maxlength: 255,
  },
  available: {
    require: [true, "how many of this we own"],
    type: Number,
    maxlength: 1000,
    default: 0,
  },
  itemSold: {
    require: true,
    type: Number,
    default: 0,
  },
  shipping: {
    type: Boolean,
    require: [true, "Specify if this product has free shipping"],
    default: false,
  },
  images: {
    type: Array,
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

productSchema.plugin(aggregatePaginate);

const Product = mongoose.model("Product", productSchema);
module.exports = {
  Product,
};
