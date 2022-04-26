const mongoose = require('mongoose')
const recipeSchema = new mongoose.Schema({
       title: String,
       image: String,
       instruction: String,
       ingredient: String,
       comments: [{
              name: String,
              message: String,
       }]
})
const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe;
