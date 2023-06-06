const { ProdModel } = require("../../models/products.model");

async function getAll(req, res, next) {
  const products = await ProdModel.find({});
  res.json(products);
}

module.exports = {
  getAll,
};
