const mongoose = require('mongoose')
require('dotenv').config()
const productRoutes = require('./src/app/modules/products/products.route')
const categoryRoutes = require('./src/app/modules/categorys/categories.route')

const express = require('express')
const cors = require('cors')

const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//server
const port = 5000
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log('Database connection is successful')
  app.get('/', (req, res) => {
    res.send('Route is working!')
  })

  //routes

  app.use('/api/v1/product', productRoutes)
  app.use('/api/v1/category', categoryRoutes)

  app.listen(port, () => {
    console.log('app is running on port', port)
  })
})

//schema design

//Routes
