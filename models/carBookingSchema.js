const mongoose = require('mongoose');
const User = require('../models/userSchema');

const carBookingSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
  name: String,
  bookingDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  price: Number,
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled", "Completed"],
    default: 'pending'
  },
},
  { timestamps: true });
const CarBooking = mongoose.model('CarBooking', carBookingSchema);
module.exports = CarBooking;