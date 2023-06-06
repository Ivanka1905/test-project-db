const { Schema, model } = require("mongoose");

const foodSchema = Schema({
  food: String,
  amount: {
    type: Number,
    default: 1,
  },
  price: Number,
});

const orderSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name"],
    },
    email: {
      type: String,
      required: [true, "Set email"],
    },
    phone: {
      type: String,
      required: [true, "Set phone"],
    },
    address: {
      type: String,
      required: [true, "Set address"],
    },
    myOrder: {
      totalPrice: { type: Number, required: [true, "Set price"] },
      cafe: { type: String },
      order: [foodSchema],
    },
  },
  { versionKey: false }
);

const OrderModel = model("order", orderSchema);

module.exports = {
  OrderModel,
};
