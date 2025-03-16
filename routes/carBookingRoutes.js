const express = require('express');
const { createBooking, getAllBookings, getBookings } = require('../controllers/carBoookingControllers');
const router = express.Router();

router.post("/create-bookings", createBooking);

router.get("/get-bookings", getAllBookings);

router.get("/getBookings/:id", getBookings);


module.exports = router;