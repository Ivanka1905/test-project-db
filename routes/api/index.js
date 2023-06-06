const express = require('express')
const { getAll, getOne, updFavorite } = require('../../controllers/products')
const { controller } = require("../../services");

const router = express.Router()

router.get('/', controller(getAll))

router.get('/:id', controller(getOne))
// router.get('/:name', getByName)

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'post template message' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'delete template message' })
// })

router.patch('/:id/favorite', controller(updFavorite))

module.exports = router
