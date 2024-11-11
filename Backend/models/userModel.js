// models/donorModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uname: { type: String, required: true },
  email:{type:String},
  pwd:{type:String, required:true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;

