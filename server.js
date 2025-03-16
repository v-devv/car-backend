// require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
// const bodyParser = require('body-parser');

const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoutes");
const carBookingRoutes = require("./routes/carBookingRoutes");

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://arjundev0125:0125@cluster0.kqltq.mongodb.net/");
    console.log("Connected to Database of MongoDB");
  } catch (err) {
    console.log(err.message);
  }
};
require("dotenv").config();
console.log("JWT_SECRET:", process.env.JWT_SECRET); // Debugging


app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("server is working....");
});

app.use("/users", userRoutes);
app.use("/cars", carRoutes);
app.use("/bookings", carBookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is listening on port", 5000);
});
connect();
