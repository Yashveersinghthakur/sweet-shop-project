import request from "supertest";
import app from "../../src/app";
import { prisma } from "../../src/config/database";

let adminToken: string;
let userToken: string;

describe("RBAC Sweets Module", () => {
  beforeAll(async () => {
    await prisma.sweet.deleteMany();
    await prisma.user.deleteMany();

    // Register USER
    await request(app).post("/api/auth/register").send({
      email: "user@test.com",
      password: "user123",
      role: "USER",
    });

    // Register ADMIN
    await request(app).post("/api/auth/register").send({
      email: "admin@test.com",
      password: "admin123",
      role: "ADMIN",
    });

    // Login USER
    const userLogin = await request(app)
      .post("/api/auth/login")
      .send({
        email: "user@test.com",
        password: "user123",
      });

    userToken = userLogin.body.token;

    // Login ADMIN
    const adminLogin = await request(app)
      .post("/api/auth/login")
      .send({
        email: "admin@test.com",
        password: "admin123",
      });

    adminToken = adminLogin.body.token;
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("ADMIN should add sweet", async () => {
    const res = await request(app)
      .post("/api/sweets")
      .set("Authorization", `Bearer ${adminToken}`)
      .send({ name: "Chocolate", price: 50 });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Chocolate");
  });

  it("USER should NOT add sweet", async () => {
    const res = await request(app)
      .post("/api/sweets")
      .set("Authorization", `Bearer ${userToken}`)
      .send({ name: "Vanilla", price: 40 });

    expect(res.status).toBe(403);
  });

  it("USER should get sweets", async () => {
    const res = await request(app)
      .get("/api/sweets")
      .set("Authorization", `Bearer ${userToken}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
