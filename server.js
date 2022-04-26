const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const db = mongoose.connection

//environment variables
const app = express()
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3001
const cors = require('cors')

//connect to Mongo
mongoose.connect(mongoURI, {
       useNewUrlParser: true
},
       () => console.log('MongoDB connection established:', mongoURI)
)
// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

//routes
const recipeController = require('./controllers/recipe.js')
app.use('/recipe', recipeController)

app.listen(PORT, () => {
       console.log('Running on port', PORT)
})