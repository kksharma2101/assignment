import mongoose from "mongoose";

export const connectoDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    if (connect) {
      console.log("DB connected...");
    }
  } catch (e) {
    console.log("error");
  }
};
