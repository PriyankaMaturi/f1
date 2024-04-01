const Food = require('../models/FoodItem')

const createFood = async(req,res)=>{
    try{
        const {name, price , cooktime, tag}= req.body
        const food = new Food({
            name,
            price,
            cooktime,
            tag 
        })
        await food.save()
        res.status(201).json(food) // indicates success
    }
    catch(error){
        console.log("there is an error:",error);
        res.status(500).json({message: 'Saver error'})
    }
}

const getFood = async(req,res)=>{
    try{
        const food= await  Food.find()
        res.status(200).json(food)
    }catch(error){
        console.error("There is an error:", error);
        res.status(500).json({message: "server error"})
    }
}

 

const updateFood = async(req,res)=>{
    try{ 
        const {name, price , cooktime, tag}= req.body

        const myFood = await Food.findByIdAndUpdate(req.params.id, {name,price,cooktime,tag})
        if(!myFood){
            return res.status(404).json({message: "food not found"})
        }
        res.status(200).json(myFood)
        console.log('inside update food')
    }
    catch(error){
        console.error("There is a error",error)
        res.status(500).json({message:"server error"})
    }
}

const deleteFood = async(req,res) =>{
    try{
        const deleteFood = await Food.findByIdAndDelete(req.params.id);
        res.status(204).send()

    }
    catch(error){ 
        console.error("There is a error",error)
        res.status(500).json({message:"server error"})
    }
}
module.exports={createFood,getFood ,updateFood,deleteFood}