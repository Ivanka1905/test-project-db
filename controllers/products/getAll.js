// const productsRepository = require('../../products')
const { ProdModel } = require("../../models/products.model");

async function getAll(req, res, next) {
  const products = await ProdModel.find({})
  // console.log(products)
  res.json(products)
  // res.json({ message: 'get template message' })
}

module.exports = {
    getAll
}