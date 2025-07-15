import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    googleId: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    photoURL: { type: String },
    wishlist: [{
        type: String, 
    }],
    bill: [{ 
        type: Object
    }],
    orders: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
