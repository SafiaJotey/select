import cors from 'cors'
import express, { urlencoded } from 'express'

import { ProductRoutes } from './app/modules/products/products.route'

const app = express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users', ProductRoutes)

export default app
