const express=require('express')
const router=express.Router()
const foodController = require("../controllers/foodController")
const Food=require("../models/FoodItem")

// get, post, put , delete

router.post('/add-food',foodController.createFood) 
router.get('/allfood',foodController.getFood)
router.put('/update/:id',foodController.updateFood)
router.delete('/delete/:id',foodController.deleteFood)
module.exports = router  
