import mongoose from "mongoose";

const DatabaseConnect = () => {
  mongoose.connect(process.env.MONGODB, () => {
    console.log("Database conntected successfully");
  });
};

export default DatabaseConnect;
