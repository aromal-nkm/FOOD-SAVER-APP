// models/donorModel.js
const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email:{type:String},
  itemDescription: { type: String, required: true },
  cookedDateTime: { type: Date, required: true },
  expirationTime: { type: String, required: true },
}, { timestamps: true });

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;

