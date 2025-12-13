import request from 'supertest';
import app from '../../src/app';

describe('Auth', () => {
  it('should register user', async () => {
    const res = await request(app).post('/api/auth/register').send({
      email: 'test@test.com',
      password: '123456'
    });
    expect(res.status).toBe(201);

  });
});
