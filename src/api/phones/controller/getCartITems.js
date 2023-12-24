const { cartModel, PhoneModel } = require("../../../model/phoneSchema")

const getCartItems=async(req,res)=>{
    const info= req.params.email
     const email= {email:info}
     console.log(email,'iam eamial');
    console.log(info);
       try {
        const result= await cartModel.find(email).populate({
            path:'cartId',
            model:PhoneModel
        })
        res.status(200).send(result)
       } catch (error) {
        console.log(error);
       }
}
module.exports= getCartItems