// models/PhoneModel.js

const { default: mongoose, mongo } = require("mongoose");
const { Schema } = require("mongoose");


const phoneSchema = new Schema({
  name: String,
  type: String,
  price: Number,
  processor: String,
  memory: String,
  os: String,
  displaySize: String,
  camera: String,
  battery: String,
  desc: String,
  img: String,
});

 
const cartSchema= new Schema({
   cartId: {
    type: mongoose.Schema.Types.ObjectId,
     ref: 'allphones'
   },
   email : String
})


const PhoneModel = mongoose.model('allphone', phoneSchema);
 const cartModel= mongoose.model('cart',cartSchema)

module.exports = {
  PhoneModel,
  cartModel

};
