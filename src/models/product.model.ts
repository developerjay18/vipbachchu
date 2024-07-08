import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    tag: {
      type: String,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    salePrice: {
      type: Number,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    affiliateUrl: {
      type: String,
      required: true,
    },
    storeName: {
      type: String,
      required: true,
    },
    highlight: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.products || mongoose.model("products", productSchema);

export default Product;
