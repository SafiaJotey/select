import { Schema, model } from 'mongoose';

// Define the schema
const productSchema = new Schema({
  Image: String,
  ProductName: String,
  Category: String,
  Status: String,
  Price: Number,
  Description: String,
  KeyFeatures: Object,
  IndividualRating: Number,
  AverageRating: Number,
  Reviews: [String],
});

// Define the model
const Product = model('Product', productSchema);

export default Product;
