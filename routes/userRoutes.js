const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/userMiddleware');

const roles = {
  user: 1,
  admin: 2
}

const { getAllUsers, createUser, loginUser, logoutUser } = require("../controllers/userControllers");

router.post("/register-user", createUser);

router.get("/get-all-users", getAllUsers);

router.post("/login-user", loginUser);

router.post("/logout-user", logoutUser);

module.exports = router;