const express = require('express')
const { getAll, getOne } = require('../../controllers/products')
const router = express.Router()

router.get('/', getAll)

router.get('/:id', getOne)
// router.get('/:name', getByName)

router.post('/', async (req, res, next) => {
  res.json({ message: 'post template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'delete template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'put template message' })
})

module.exports = router
