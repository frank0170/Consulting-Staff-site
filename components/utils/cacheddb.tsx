// utils/mongodb.js
import { MongoClient, Db } from 'mongodb';

const connectionString =
  "mongodb+srv://franky64:k2OCVVi0q83cMWIO@cluster0.b5xnt2y.mongodb.net/?retryWrites=true&w=majority";

let cachedDb: Db 

async function connectDb() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = new MongoClient(connectionString);

  try {
    await client.connect();
    cachedDb = client.db("ConsultingStaff");
    return cachedDb;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export default connectDb;