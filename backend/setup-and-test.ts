import { execSync } from "child_process";
import { prisma } from "./src/config/database";
import * as bcrypt from "bcryptjs";


async function main() {
  console.log("✅ Resetting database...");

  // Delete all existing data
  await prisma.sweet.deleteMany({});
  await prisma.user.deleteMany({});

  console.log("✅ Seeding users...");

  // Seed Admin
  const adminPassword = await bcrypt.hash("admin123", 10);
  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@example.com",
      password: adminPassword,
      role: "ADMIN",
    },
  });

  // Seed Normal User
  const userPassword = await bcrypt.hash("user123", 10);
  await prisma.user.create({
    data: {
      name: "User",
      email: "user@example.com",
      password: userPassword,
      role: "USER",
    },
  });

  console.log("✅ Running Jest tests...");

  // Run Jest tests
  execSync("npx jest --runInBand --verbose", { stdio: "inherit" });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
