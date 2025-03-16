const jwt = require('jsonwebtoken');
const userModel = require("../models/userSchema");

const authenticateToken = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  console.log(token);

  if (!token) {
    return res.status(401).send({ message: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }
    req.user = user;
    if (user.role !== "user") {
      return res.status(403).send({ message: "Access denied. You are not authorized to access this resource." });
    }
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).send({ message: "Token has expired,Please login again." });
    }
    console.error(err);
    res.status(400).send({ message: "Invalid token." });
  }
}

module.exports = authenticateToken;