const carModel = require("../models/carSchema");

const createCar = async (req, res) => {
  try {
    const { make, model, year, pricePerDay, availability } = req.body;

    const carDoc = new carModel({ make, model, year, pricePerDay, availability });
    await carDoc.save();
    res.status(201).json({ message: "Car created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating car" });
  }
};

const getAllCars = async (req, res) => {
  try {
    const cars = await carModel.find();
    console.log(cars)
    res.status(200).json({ data: cars, message: "All cars retrieved successfully" });
    // res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cars" });
  }
};

const getCarById = async (req, res) => {
  const id = req.params.id;
  try {
    // Correct query to find by the car's _id field
    const carDoc = await carModel.findById(id); // findById uses _id by default
    if (!carDoc) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.json({ carModel: carDoc, message: "Car fetched successfully" });
  } catch (err) {
    console.error("Error fetching car:", err);
    res.status(500).json({ message: "Error fetching car" });
  }
}


module.exports = { createCar, getAllCars, getCarById };