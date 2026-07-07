import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn(
      "⚠ MONGODB_URI is not set — messages will NOT be saved to a database (email-only mode)."
    );
    return;
  }

  if (isConnected) return;

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("✓ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("✕ MongoDB connection failed:", err.message);
    // Don't crash the server — the contact form can still send email
    // even if the database is temporarily unreachable.
  }
}

export function isDbConnected() {
  return isConnected;
}