import mongoose from "mongoose";

export const connectDB = async () => {
  const url = process.env.MONGO_URI;
  
 
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }

}

export default connectDB;