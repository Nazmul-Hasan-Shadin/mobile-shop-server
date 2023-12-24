
const express= require('express')
const uplodphone = require('../../api/phones/controller/uploadPhone')
const getPhones = require('../../api/phones/controller/getPhones')

 const router= express.Router()

  
 router.post('/upload',uplodphone)
 router.get('/api/v1/phones',getPhones)



 module.exports=router



