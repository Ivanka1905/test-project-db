const { Schema, model } = require("mongoose");

const productSchema = Schema(
  {
    cafe: {
      type: String,
      required: [true, "Set name of cafe"],
    },
    food: {
      type: String,
      required: [true, "Set name of food"],
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Set price"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

const ProdModel = model("product", productSchema);

module.exports = {
  ProdModel,
};
