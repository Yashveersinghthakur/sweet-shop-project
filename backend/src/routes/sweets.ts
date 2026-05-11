import { Router } from "express";
import { prisma } from "../config/database";
import { authMiddleware, adminMiddleware } from "../middleware/auth";

const router = Router();

// ADMIN adds sweet
router.post("/", authMiddleware, adminMiddleware, async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sweet = await prisma.sweet.create({
    data: { name, price },
  });

  res.status(201).json(sweet);
});

// USER gets sweets
router.get("/", authMiddleware, async (req, res) => {
  const sweets = await prisma.sweet.findMany();
  res.status(200).json(sweets);
});

export default router;
