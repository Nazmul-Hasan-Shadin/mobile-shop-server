const PhoneModel = require("../../../model/phoneSchema")

const getPhones=async(req,res)=>{
    
    try {
          
    const result= await PhoneModel.find()
      
    res.status(200).send(result)
    } catch (error) {
        console.log(error);
    }

}
module.exports=getPhones