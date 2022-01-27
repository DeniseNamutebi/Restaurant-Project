const { MongoClient } = require("mongodb");

require('dotenv').config();

const uri = process.env.DB_CONNECTION_STRING;

const client = new MongoClient(uri);

async function run() {
try {
    await client.connect();
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);