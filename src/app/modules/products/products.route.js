import express from 'express'
import { ProductControllers } from './products.controllers'




const router = express.Router()


router.get('/', ProductControllers.getProducts)
// router.post('/:id', BookControllers.reviewBook)
// router.patch('/edit/:id', BookControllers.updateBooks)
// router.delete('/:id', BookControllers.deleteBook)
// router.get('/:id', BookControllers.getSingleBook)

export const ProductRoutes = router
