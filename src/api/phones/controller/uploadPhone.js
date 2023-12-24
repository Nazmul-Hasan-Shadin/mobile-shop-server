const PhoneModel = require("../../../model/phoneSchema");

const uplodphone=async(req, res) => {
    const info= req.body
    console.log(info);
    try {
     
      await PhoneModel.deleteMany({});
  
      // Insert new data
      await PhoneModel.insertMany(info);
       console.log('post succesful');
  
      res.status(200).json({ message: 'Data uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  module.exports=uplodphone