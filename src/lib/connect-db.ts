﻿import mongoose from "mongoose";

export const connectDB = async (connectionString: string) => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
