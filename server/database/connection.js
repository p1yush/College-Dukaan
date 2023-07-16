import mongoose from "mongoose";

// An unnamed function to conncect the MongoDB
export default async () => {
  return mongoose.connect(process.env.MONGO_URL);
};
