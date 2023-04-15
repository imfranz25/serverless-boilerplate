import { MongoClient, ServerApiVersion } from 'mongodb';
import appConfig from 'infra/configs';

let cachedClient: MongoClient | null = null;
const client = new MongoClient(appConfig.MONGODB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function connectToDatabase() {
  if (!cachedClient) {
    await client.connect();
    cachedClient = client;
  }

  return cachedClient;
}

export default connectToDatabase;
