const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const PruebaRoutes = require('./routes/prueba.routes')


app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api/prueba', PruebaRoutes)

module.exports = app
