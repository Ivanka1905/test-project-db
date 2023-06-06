const express = require('express')
const {addOrder} = require('../../controllers/orders')
const { controller } = require("../../services");

const router = express.Router()

// router.get('/', getAll)

// router.get('/:id', getOne)
// router.get('/:name', getByName)

router.post('/order', controller(addOrder))

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'delete template message' })
// })

// router.patch('/:id/favorite', updFavorite)

module.exports = router
