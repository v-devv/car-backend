const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const roles = {
  user: 1,
  admin: 2
}

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [8, "Password must be at least 8 characters"],
  },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
},
  {
    timestamps: true,
  });

const User = mongoose.model("User", userSchema);
module.exports = User;