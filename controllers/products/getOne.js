const { ProdModel } = require("../../models/products.model");
const { errorService } = require("../../services");

async function getOne(req, res, next) {
  const { id } = req.params;
  const product = await ProdModel.findById(id).catch(() => {
    throw errorService(`Contact id "${req.params.id}" is not correct`, 400);
  });

  if (product === null) {
    throw errorService("Not found", 404);
  }
  res.send(product);
}

module.exports = {
  getOne,
};
