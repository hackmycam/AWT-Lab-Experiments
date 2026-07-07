const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server');

test('PUT /books/:id works without a body', async () => {
  const server = app.listen(0);
  const address = await new Promise((resolve) => {
    server.once('listening', () => resolve(server.address()));
  });

  const response = await fetch(`http://127.0.0.1:${address.port}/books/1`, {
    method: 'PUT'
  });

  assert.equal(response.status, 200);
  const data = await response.json();
  assert.equal(data.book.title, 'Java Programming');

  await new Promise((resolve) => server.close(resolve));
});
