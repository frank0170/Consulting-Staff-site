const { MongoClient } = require("mongodb");

const { ObjectId } = require("mongodb");

const connectionString =
  "mongodb+srv://prodConsult:prodConsult0987ggg@cluster0.b5xnt2y.mongodb.net/?retryWrites=true&w=majority";

const mongoClient = new MongoClient(connectionString);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    const database = (await clientPromise).db("consult");
    const collection = database.collection("projects");

    const id = event.path;

    const parts = id.split("/");
    const lastPart = parts[parts.length - 1];

    let query = { _id: new ObjectId(lastPart) };
    let result = await collection.findOne(query);

    if (!result) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Not found", id: lastPart }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
