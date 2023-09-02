const express = require('express')
const CategoryController = require('./categories.controllers')

const router = express.Router()
router.get('/', CategoryController.getCategory)
router.get('/:category', CategoryController.getSingleCategory)

// router.patch('/edit/:id', BookControllers.updateBooks)
// router.delete('/:id', BookControllers.deleteBook)
// router.get('/:id', BookControllers.getSingleBook)

module.exports = router
