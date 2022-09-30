const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const data = require('./routes/data')

const app = express()


app.use(cors())


app.use(express.json())
app.use(data)




module.exports = app