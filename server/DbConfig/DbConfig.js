import mongoose from "mongoose";

const DatabaseConnect = () => {
  mongoose.connect(process.env.DATABASE_URL, () => {
    console.log("Database conntected successfully");
  });
};

export default DatabaseConnect;
