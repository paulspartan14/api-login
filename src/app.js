const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const api = require('./routes')
const { handleErrors } = require('./middlewares/handleErrors')

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors options
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// Routes
app.use('/api', api)
app.use(handleErrors)

module.exports = app