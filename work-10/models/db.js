const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const url = process.env.URL_DB;

const db = MongoClient.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

process.on('SIGINT', async () => {
  console.log('Disconnected from DB');
  const client = await db;
  console.log('--1--');
  client.close();
  console.log('--2--');
  process.exit(1);
});

module.exports = db;
