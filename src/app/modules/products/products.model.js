const { Schema, model } = require('mongoose')
// Define the schema
const productSchema = new Schema({
  Image: String,
  ProductName: String,
  Category: String,
  Status: String,
  Price: Number,
  Description: String,
  KeyFeatures: Object,

  Reviews: [Object],
})

// Define the model
const Product = model('Product', productSchema)
module.exports = Product
