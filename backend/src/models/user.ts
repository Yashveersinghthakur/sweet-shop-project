import bcrypt from 'bcryptjs'; // changed from 'bcrypt'
import { prisma } from '../config/database';

// Example function to create user
export const createUser = async (email: string, password: string, name: string, role: string) => {
  const hashed = await bcrypt.hash(password, 10);

  return await prisma.user.create({
    data: {
      email,
      password: hashed,
      name,
      role,
    },
  });
};
