const bookingModel = require("../models/carBookingSchema");
const mongoose = require("mongoose");

const createBooking = async (req, res) => {
  console.log("Incoming data", req.body);
  // const car = await carModel.findById(req.body.car);
  // if (!car) {
  //   return res.status(400).json({ message: "Car not found" });
  // }

  try {
    const { car, name, bookingDate, endDate, price, status } = req.body;
    const bookingDoc = new bookingModel({
      car: car,
      name: name,
      bookingDate: bookingDate,
      endDate: endDate,
      price: price,
      status: status
    });


    await bookingDoc.save();
    res.status(201).json({ message: "Booking created successfully", bookingDoc });
  } catch (err) {
    console.error("Error creating booking:", err);
    res.status(500).json({ message: "Error creating booking" });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingModel.find();
    console.log(bookings)
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
};

const getBookings = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  try {
    const bookings = await bookingModel.find({ car: id }); // Adjust based on your schema
    if (!bookings) {
      return res.status(404).json({ error: "No bookings found" });
    }
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
};

module.exports = { createBooking, getAllBookings, getBookings };