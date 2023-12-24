 
 require('dotenv').config()
const mongoose= require('mongoose')


const getConection=()=>{
  let getConectionUri;
   
   if (process.env.ENVIORNMENT==='DEVELOPMENT') {
        getConectionUri= process.env.uri
        getConectionUri= getConectionUri.replace('<username>',process.env.DB_USER)
        getConectionUri= getConectionUri.replace('<password>',process.env.DB_PASS)

   }
  return getConectionUri
}


const connectToDb=async()=>{
    console.log('database connection');
   const uri= getConection()

    await mongoose.connect(uri,{
        dbName:process.env.DB_NAME
    })

    console.log('database connected');

}

module.exports=connectToDb