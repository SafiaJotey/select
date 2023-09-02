const CategoryServices = require('./categories.services')

const getCategory = async (req, res, next) => {
  try {
    const result = await CategoryServices.getCategory()

    res.status(200).send({
      success: true,
      messege: 'Successfully get all the category',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const getSingleCategory = async (req, res, next) => {
  const category = req.params.category

  try {
  
    const result = await CategoryServices.getSingleCategory(category)

    res.status(200).send({
      success: true,
      messege: 'Successfully get all the products',
      data: result,
    })
  } catch (err) {
    console.log(err)
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
  getCategory,
  getSingleCategory,
}
