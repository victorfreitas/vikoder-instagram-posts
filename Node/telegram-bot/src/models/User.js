const mongoose = require('../config/mongoose')

const userSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  username: { type: String, default: '' },
  languageCode: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  isBot: Boolean,
})

module.exports = mongoose.model('User', userSchema)
