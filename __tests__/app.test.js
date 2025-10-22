import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';

describe('GET /api/test', () => {
  it('should respond with a success message', async () => {
    const response = await request(app).get('/api/test');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "API is working properly" });
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});