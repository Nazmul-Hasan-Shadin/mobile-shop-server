const { PhoneModel } = require("../../../model/phoneSchema")

const productSearch=async(req,res)=>{
    
    const query=req.query.search
    console.log(query,'iam search');
    if (!query) {
       res.status(400).json({message:'search field required'})  
    }

    try {
        const productSearch= await PhoneModel.find({
            name:{$regex:query , $options:'i'}
        })
        res.json(productSearch)
    } catch (error) {
         console.log(error);
    }
}

module.exports= productSearch