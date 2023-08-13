import { ProductServices } from './products.services'

const getProducts = async (req, res, next) => {
  try {
    const result = await ProductServices.getBooks()

    res.status(200).send({
      success: true,
      messege: 'Successfully get all the products',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const ProductControllers = {
  getProducts,
}
