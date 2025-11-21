import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ 
        status: 'error',
        message: 'Authentication required' 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');
    
    if (!user) {
      return res.status(401).json({ 
        status: 'error',
        message: 'User not found' 
      });
    }

    req.user = user;
    req.userId = user._id;
    next();
  } catch (error) {
    res.status(401).json({ 
      status: 'error',
      message: 'Invalid token' 
    });
  }
};

export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        status: 'error',
        message: 'Access denied' 
      });
    }
    next();
  };
};
