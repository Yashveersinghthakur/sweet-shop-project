import request from 'supertest';
import app from '../../src/app'; // your Express app
import jwt from 'jsonwebtoken';

let token: string;

beforeAll(async () => {
  // Optionally, register/login a user to get JWT token
  const res = await request(app).post('/api/auth/register').send({
    username: 'tester',
    password: '123456',
  });

  const loginRes = await request(app).post('/api/auth/login').send({
    username: 'tester',
    password: '123456',
  });

  token = loginRes.body.token; // save JWT token for protected routes
});

describe('Sweets Module', () => {
  it('should add a sweet', async () => {
    const res = await request(app)
      .post('/api/sweets')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Gulab Jamun',
        price: 50,
        stock: 100,
      });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Gulab Jamun');
  });

  it('should get all sweets', async () => {
    const res = await request(app)
      .get('/api/sweets')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should purchase a sweet', async () => {
    const res = await request(app)
      .post('/api/sweets/purchase')
      .set('Authorization', `Bearer ${token}`)
      .send({
        sweetId: 1, // make sure this ID exists
        quantity: 2,
      });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Purchase successful');
  });
});
