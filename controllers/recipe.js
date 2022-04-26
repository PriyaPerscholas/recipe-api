const express = require('express')
const router = express.Router();
const Recipe = require('../models/recipe')

//index
router.get('/', (req, res) => {
       Recipe.find({}, (err, foundRecipe) => {
              res.json(foundRecipe)
       })
})
//create
router.post('/', (req, res) => {
       Recipe.create(req.body, (err, createdRecipe) => {
              res.json(createdRecipe)
       })
})
//update
router.put('/:id', (req, res) => {
       Recipe.findByIdAndUpdate(req.params.id, req.body, {
              new: true
       }, (err, updatedRecipe) => {
              res.json(updatedRecipe)
       })
})
//show
router.get('/:id', (req, res) => {
       Recipe.findById(req.params.id, (err, foundRecipe) => {
              res.json(foundRecipe)
       })
})
//delete
router.delete('/:id', (req, res) => {
       Recipe.findByIdAndDelete(req.params.id, (err, deleteRecipe) => {
              res.json(deleteRecipe)
       })
})
module.exports = router