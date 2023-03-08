const { Client } = require('pg');

async function getConexion() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'bryan',
    password: 'admin123',
    database: 'my_store',
  });

  await client.connect();
  return client;
}

module.exports = getConexion;
