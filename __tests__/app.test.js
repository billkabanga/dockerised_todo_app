const request = require('supertest');
const app = require('../app');
require('../src/routes')(app);

describe('Test the root path', () => {
  test('It should give response to the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Welcome to the app');
  });

  test('It should fetch all todos', async () => {
    const response = await request(app).get('/api/todos');
    expect(response.statusCode).toBe(200);
  });
});
