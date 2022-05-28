/* eslint-disable no-undef */
const express = require('express');
const request = require('supertest');

const getAll = require('../controllers/products/getall');

const app = express();

app.get('/api/products', getAll);

describe('test getAll controller', () => {
  beforeAll(() => app.listen(3000));
  //   afterAll(() => app.close());

  it('getAll return products array', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    const [product] = response.body;
    expect(typeof product.id).toBe('string');
    expect(typeof product.name).toBe('string');
    expect(typeof product.price).toBe('number');
  });
});
