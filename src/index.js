const mongoose = require('mongoose')
require('dotenv').config()
const productRoutes = require('./app/modules/products/products.route')

const app = require('./app')
//server
const port = process.env.PORT || 8000
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log('Database connection is successful')
})

//schema design

//Routes
app.get('/', (req, res) => {
  res.send('Route is working!')
})

//routes

app.use('/api/v1/product', productRoutes)

app.listen(port, () => {
  console.log('app is running on port', port)
})
