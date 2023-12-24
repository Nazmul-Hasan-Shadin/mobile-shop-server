const express= require('express')
require('dotenv').config()
const applayMiddleware = require('./middleware/applayMiddleWare')
const connectToDb = require('./db/connectdb')
const port = process.env.PORT || 5000;
const app= express()



const phone= require('./router/phone/index')





applayMiddleware(app)
app.use(phone)

app.get('/health',(req,res)=>{
    res.send('server is running')
})



app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({message:err.message})
})

app.listen(port,()=>{
    console.log(`server is running ${port}`);
    connectToDb()
})

module.exports=app