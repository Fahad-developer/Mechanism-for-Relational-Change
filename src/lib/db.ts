import mongoose from "mongoose";

const MONGOURI = process.env.MONGOURI!;

const cached = (global as any).mongoose || { conn: null, promise: null };
(global as any).mongoose = cached;

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGOURI).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
