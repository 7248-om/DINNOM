import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true,
    sparse: true // Allows multiple documents to have a null googleId, but unique if it exists
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String
  },
  // This is the crucial field that was likely missing
  photoURL: {
    type: String
  },
  wishlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product' // Assuming you have a Product model
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order' // Assuming you have an Order model
  }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
