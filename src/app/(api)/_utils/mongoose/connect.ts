import mongoose from 'mongoose';

const DATABASE_URL = process.env.DATABASE_URL;
let cachedConnection: null | typeof import('mongoose') = null;

export default async function connectToDatabase() {
  if (cachedConnection) {
    return cachedConnection;
  }

  await mongoose.connect(DATABASE_URL);
  cachedConnection = mongoose;
}
