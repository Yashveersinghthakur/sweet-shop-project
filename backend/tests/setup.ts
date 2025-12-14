import { prisma } from '../src/config/database';

// Example setup function
export const setupDatabase = async () => {
  await prisma.user.deleteMany();
  await prisma.sweet.deleteMany();
};
