import mongoose from "mongoose";
import dotev from "dotenv";
dotev.config();
const MONGOURL = process.env.MONGOURL;
export const dbConnect = async () => {
  await mongoose.connect(MONGOURL);
};
