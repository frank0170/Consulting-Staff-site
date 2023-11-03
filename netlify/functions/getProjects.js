const connectionString =
  "mongodb+srv://prodConsult:prodConsult0987ggg@cluster0.b5xnt2y.mongodb.net/?retryWrites=true&w=majority";

const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(connectionString);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    const database = (await clientPromise).db("consult");
    const collection = database.collection("projects");
    const results = await collection.find({}).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
