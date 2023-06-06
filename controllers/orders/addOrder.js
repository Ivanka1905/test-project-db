const { OrderModel } = require("../../models/order.model");
const { errorService } = require("../../services");
const { addOrderSchema } = require("../../schemas/add-order.schems");

async function addOrder(req, res, next) {
  const {
    name,
    email,
    phone,
    address,
    myOrder: {
      totalPrice,
      cafe,
      order,
    },
  } = req.body;
  console.log(req.body);
  const { error } = addOrderSchema.validate({
    name,
    email,
    phone,
    address,
    myOrder: {
      totalPrice,
      cafe,
      order,
    },
  });
  if (error) {
    throw errorService(error.message, 400);
  }
  const newOrder = await OrderModel.create({
    name,
    email,
    phone,
    address,
    myOrder: {
      totalPrice,
      cafe,
      order,
    },
  });

  res.status(201).json(newOrder);
}

module.exports = {
  addOrder,
};
