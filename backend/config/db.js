import mongoose from "mongoose";

export async function connectDB(uri) {
  if (!uri) {
    console.log("⚠️  No MONGO_URI provided — running in in-memory mode.");
    return null;
  }
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
    return mongoose;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    return null;
  }
}
