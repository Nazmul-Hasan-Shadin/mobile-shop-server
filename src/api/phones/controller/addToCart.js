const { cartModel } = require("../../../model/phoneSchema");

const addToCart=async(req,res)=>{
   const cartData= req.body; 
   console.log(cartData);
    const result= await cartModel.create(cartData)
    res.status(200).send(result)
}
module.exports= addToCart