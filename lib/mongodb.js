import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

if (!process.env.MONGODB_URL) {
  throw new Error('Please define the MONGODB_URL environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log(process.env.MONGODB_URL);

    cached.promise = mongoose
      .connect(process.env.MONGODB_URL, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;