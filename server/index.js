import express from "express";
import cors from "cors";
import DatabaseConnect from "./DbConfig/DbConfig.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

import blogRouter from "./routes/blogRoute.js";
import userRouter from "./routes/userRoute.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

DatabaseConnect();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/user", userRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}`);
});
