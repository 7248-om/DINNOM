import express from 'express';
import jwt from 'jsonwebtoken';
import admin from '../firebaseAdmin.js';
import User from '../models/User.js';

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your_default_jwt_secret';

router.post('/google', async (req, res) => {
  const { token } = req.body;
  console.log("Received token from frontend:", token);

  try {
    // Verify token using Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { email, name, picture, uid } = decodedToken;

    // Find or create the user in your MongoDB
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, name, picture });
    }

    // Generate your own JWT
    const jwtToken = jwt.sign(
      {
        id: user._id,
        email: user.email,
        name: user.name,
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      token: jwtToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        picture: user.picture,
      },
    });
  } catch (error) {
  console.error('Google OAuth token verification error:', error);
  return res.status(401).json({ error: error.message || 'Invalid token' });
}

});

export default router;
