const express= require('express')

const cors= require('cors')



const applayMiddleware=(app)=>{
    app.use(cors({
        origin: 'http://localhost:5173',
        credentials:true
    }))

     
    app.use(express.json())


}

module.exports= applayMiddleware