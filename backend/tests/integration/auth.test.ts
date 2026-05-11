import request from "supertest";
import app from "../../src/app";
import { prisma } from "../../src/config/database";

describe("Auth with roles", () => {
  beforeAll(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should register USER", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        email: "user@example.com",
        password: "password123",
        role: "USER",
      });

    expect(res.status).toBe(201);
    expect(res.body.email).toBe("user@example.com");
    expect(res.body.role).toBe("USER");
  });

  it("should register ADMIN", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        email: "admin@example.com",
        password: "admin123",
        role: "ADMIN",
      });

    expect(res.status).toBe(201);
    expect(res.body.role).toBe("ADMIN");
  });

  it("should login ADMIN and get token", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "admin@example.com",
        password: "admin123",
      });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
