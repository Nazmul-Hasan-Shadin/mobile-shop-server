// models/PhoneModel.js

const { default: mongoose } = require("mongoose");
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

const PhoneModel = mongoose.model('allphone', phoneSchema);

module.exports = PhoneModel;
