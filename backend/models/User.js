const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  wishlist: [{ type: String }], 
  bill: [{
    items: [{ type: String }], 
    total: Number,
    date: { type: Date, default: Date.now }
  }]
});

module.exports = mongoose.model('User', userSchema);