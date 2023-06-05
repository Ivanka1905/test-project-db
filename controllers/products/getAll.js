const productsRepository = require('../../products')

async function getAll(req, res, next) {
try {
  const products = await productsRepository.findAll()
  res.send(products)
  // res.json({ message: 'get template message' })
} catch (error) {
  next(error)
}
}

module.exports = {
    getAll
}