const Category = require('./categories.model')

const getCategory = async () => {
  const result = await Category.find({}).populate('products')

  return result
}
const getSingleCategory = async category => {
  const result = await Category.find({ _id: category }).populate('products')

  return result
}

module.exports = {
  getCategory,

  getSingleCategory,
}
