import { MongoClient } from 'mongodb'

const connectionString = process.env.ATLAS_URI;

let client = new MongoClient(connectionString);

let conn; // establishing connection

try {
  conn = await client.connect();
} catch(e) {
  console.log(e)
}

let db = conn.db('boatr_db');

export default db