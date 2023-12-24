
const express= require('express')
const uplodphone = require('../../api/phones/controller/uploadPhone')
const getPhones = require('../../api/phones/controller/getPhones')
const addToCart = require('../../api/phones/controller/addToCart')
const getCartItems = require('../../api/phones/controller/getCartITems')

 const router= express.Router()

  
 router.post('/upload',uplodphone)
 router.get('/api/v1/phones',getPhones)
 router.post('/api/v1/addto-cart', addToCart)
 router.get('/api/v1/getcartItems/:email',getCartItems)



 module.exports=router



