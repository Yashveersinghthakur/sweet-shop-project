import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({
        message: 'Access denied'
      });
    }

    const verified = jwt.verify(
      token,
      process.env.JWT_SECRET || 'secret'
    );

    req.user = verified;

    next();

  } catch (error) {
    res.status(400).json({
      message: 'Invalid token'
    });
  }
};

export const adminMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.user?.role !== 'ADMIN') {
      return res.status(403).json({
        message: 'Admin access required'
      });
    }

    next();

  } catch (error) {
    res.status(500).json({
      message: 'Server error'
    });
  }
};