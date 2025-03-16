const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  pricePerDay: Number,
  availability: String,
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);
module.exports = Car;