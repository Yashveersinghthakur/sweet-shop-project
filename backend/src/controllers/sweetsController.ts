import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { AuthRequest } from '../middleware/auth';

export const getAllSweets = async (req: AuthRequest, res: Response) => {
  try {
    const sweets = await prisma.sweet.findMany();
    res.json(sweets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sweets' });
  }
};
