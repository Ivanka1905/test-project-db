// const productsRepository = require('../../products')
const { ProdModel } = require("../../models/products.model");
const { errorService } = require("../../services");

// const mongoose = require('mongoose')
async function getOne(req, res, next) {
   const {id} = req.params
    const product = await ProdModel.findById(id)
      .catch(() => {
    throw errorService(`Contact id "${req.params.id}" is not correct`, 400);
  });

    if (product === null) {
      // res.status(404).send({message: "Sorry, not found"})
       throw errorService("Not found", 404);
    }
  res.send(product)
  // res.json({ message: 'get template message' })
  // res.json({ message: 'get one template message' })
}

module.exports = {
    getOne
}