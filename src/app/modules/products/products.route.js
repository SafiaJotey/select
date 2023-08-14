const express = require('express')
const ProductControllers = require('./products.controllers')

const router = express.Router()

router.get('/', ProductControllers.getProducts)
router.get('/random', ProductControllers.getRandomProducts)
router.get('/:productId', ProductControllers.getProductDetails)
router.get('/:category', ProductControllers.getCategory)

// router.patch('/edit/:id', BookControllers.updateBooks)
// router.delete('/:id', BookControllers.deleteBook)
// router.get('/:id', BookControllers.getSingleBook)

module.exports = router
