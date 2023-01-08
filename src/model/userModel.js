const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
},{ collection: "user", timestamps: true })

const user = mongoose.model("user", userSchema)

module.exports = user;