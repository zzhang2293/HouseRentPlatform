import mongoose, { connect } from "mongoose";
// import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
let connected = false;
const connectDB = async () => {
  mongoose.set("strictQuery", true);
  // if the database is already connected do not connect again
  if (connected) {
    console.log("MongoDB is already connected ... ");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("mongodb connected ...");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
