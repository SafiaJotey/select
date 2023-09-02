const mongoose = require('mongoose')

// Define the Category schema
const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
})

// Create the Category model
const Category = mongoose.model('Category', categorySchema)

module.exports = Category
