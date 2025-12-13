import { Request, Response } from 'express';

// In-memory sweets store for now (replace with DB later)
let sweets = [];
let nextId = 1;

export const addSweet = (req: Request, res: Response) => {
  const { name, price, stock } = req.body;
  const sweet = { id: nextId++, name, price, stock };
  sweets.push(sweet);
  res.status(201).json(sweet);
};

export const getSweets = (req: Request, res: Response) => {
  res.status(200).json(sweets);
};

export const purchaseSweet = (req: Request, res: Response) => {
  const { sweetId, quantity } = req.body;
  const sweet = sweets.find((s) => s.id === sweetId);

  if (!sweet) return res.status(404).json({ message: 'Sweet not found' });
  if (sweet.stock < quantity)
    return res.status(400).json({ message: 'Not enough stock' });

  sweet.stock -= quantity;
  res.status(200).json({ message: 'Purchase successful' });
};
