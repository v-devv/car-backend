const express = require('express');
const { createCar, getAllCars, getCarById } = require('../controllers/carControllers');
const router = express.Router();

// const authenticateToken = require("../middleware/userMiddleware");

router.post("/add-car", createCar);

router.get("/get-all-cars", getAllCars);

router.get("/get-car/:id", getCarById);

module.exports = router;