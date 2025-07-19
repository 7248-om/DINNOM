import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key-that-is-long-and-secure';

// Middleware to check if user is authenticated
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = await User.findById(decoded.id);

      if (!req.user) {
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      return next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  return res.status(401).json({ message: 'Not authorized, no token' });
};

// Middleware to check if user is admin
const adminOnly = (req, res, next) => {
  if (req.user && req.user.isAdmin === true) {
    return next();
  } else {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
};

export { protect, adminOnly };
