import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
  },
  photoURL: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false, // 🔒 By default, every user is NOT admin
  },
  wishlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
  }],
  isAdmin: { type: Boolean, default: false }, // ✅ include this field
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
