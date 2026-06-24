import env from "dotenv";
env.config();

export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/ecom";
export const PORT = process.env.PORT || 3000;