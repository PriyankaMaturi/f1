const express= require('express')
const dotEnv = require('dotenv')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const FoodRoutes = require('./routes/foodRoures')

const app=express()

app.use(cors())
const PORT = process.env.PORT || 5000

dotEnv.config()

app.use(bodyParser.json())
mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log('MongoDB connected Succesfully')
})
.catch((error)=>{
    console.log(`{error}`)
})

app.use('/food',FoodRoutes)

app.listen(PORT, ()=>{
    console.log(`Server started and running at ${PORT}`)
})