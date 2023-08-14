const ProductServices = require('./products.services')

const getProducts = async (req, res, next) => {
  try {
    const result = await ProductServices.getProducts()

    res.status(200).send({
      success: true,
      messege: 'Successfully get all the products',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
const getRandomProducts = async (req, res, next) => {
  try {
    const result = await ProductServices.getRandomProducts(6)

    res.status(200).send({
      success: true,
      messege: 'Successfully get all the products',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
const getCategory = async (req, res, next) => {
  const category = req.params.category
  try {
    const result = await ProductServices.getCategory(category)

    res.status(200).send({
      success: true,
      messege: 'Successfully get all the products',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
const getProductDetails = async (req, res, next) => {
  const productId = req.params.productId
  try {
    const result = await ProductServices.getProductDetails(productId)

    res.status(200).send({
      success: true,
      messege: 'Successfully get the product',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getProducts,
  getRandomProducts,
  getCategory,
  getProductDetails,
}
