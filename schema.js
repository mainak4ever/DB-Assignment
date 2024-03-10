// This schema uses custom id of type number with auto increment

const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

// Product Schema
const productSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      default: 1,
    },
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
      type: Number,
      ref: "product_category",
    },
    inventory_id: {
      type: Number,
      ref: "product_inventory",
    },
    price: {
      type: Number,
    },
    discount_id: {
      type: Number,
      ref: "discount",
    },
  },
  { timestamps: true }
);

productSchema.plugin(AutoIncrement, { inc_field: "_id" });

const Product = mongoose.model("product", productSchema);

// Product Inventory Schema
const productInventorySchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      default: 1,
    },
    quantity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

productInventorySchema.plugin(AutoIncrement, { inc_field: "_id" });

const ProductInventory = mongoose.model(
  "product_inventory",
  productInventorySchema
);

// Discount Schema
const discountSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      default: 1,
    },
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

discountSchema.plugin(AutoIncrement, { inc_field: "_id" });

const Discount = mongoose.model("discount", discountSchema);

// Product Category Schema
const productCategorySchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      default: 1,
    },
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

productCategorySchema.plugin(AutoIncrement, { inc_field: "_id" });

const ProductCategory = mongoose.model(
  "product_category",
  productCategorySchema
);

module.exports = { Product, ProductInventory, Discount, ProductCategory };
