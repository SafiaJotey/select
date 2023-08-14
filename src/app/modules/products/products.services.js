const Product = require('./products.model')

const getProducts = async () => {
  const result = await Product.find({})

  return result
}
const getCategory = async category => {
  const result = await Product.find({ Category: category })

  return result
}
const getProductDetails = async productId => {
  const result = await Product.find({ _id: productId })

  return result
}
const getRandomProducts = async count => {
  const totalProductsCount = await Product.countDocuments()
  const randomIndexes = generateRandomIndexes(count, totalProductsCount)

  const randomProducts = await Product.aggregate([
    { $match: {} }, // Match all documents
    { $sample: { size: count } }, // Retrieve random documents based on the count
  ])

  return randomProducts
}

const generateRandomIndexes = (count, total) => {
  const randomIndexes = new Set()

  while (randomIndexes.size < count) {
    const randomIndex = Math.floor(Math.random() * total)
    randomIndexes.add(randomIndex)
  }

  return [...randomIndexes]
}

module.exports = {
  getProducts,
  getRandomProducts,
  getCategory,
  getProductDetails,
}
