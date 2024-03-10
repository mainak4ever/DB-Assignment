// This schema uses auto generated objectId by mongodb

const mongoose = require("mongoose");

// Product Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    desc: {
      type: String,
    },
    SKU: {
      type: String,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product_category",
    },
    inventory_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product_inventory",
    },
    price: {
      type: Number,
    },
    discount_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "discount",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

// Product Inventory Schema
const productInventorySchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const ProductInventory = mongoose.model(
  "product_inventory",
  productInventorySchema
);

// Discount Schema
const discountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    discount_percent: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Discount = mongoose.model("discount", discountSchema);

// Product Category Schema
const productCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProductCategory = mongoose.model(
  "product_category",
  productCategorySchema
);

module.exports = { Product, ProductInventory, Discount, ProductCategory };
