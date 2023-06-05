const productsRepository = require('../../products')

async function getOne(req, res, next) {
  try {
   const {id} = req.params
    const product = await productsRepository.findOne(id)
    if (product === null) {
      // res.status(404).send({message: "Sorry, not found"})
      const error = new Error('Sorry, not found')
      error.code = 404
      throw error
    }
  res.send(product)
  // res.json({ message: 'get template message' })
} catch (error) {
  next(error)
}
  // res.json({ message: 'get one template message' })
}

module.exports = {
    getOne
}