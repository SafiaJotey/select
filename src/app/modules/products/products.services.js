import Product from './products.model'

const getProducts = async () => {
  const result = await Product.find({})

  return result
}

export const ProductServices = {
  getProducts,
}
