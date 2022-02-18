import express from "express";
import cors from "cors";
import DatabaseConnect from "./DbConfig/DbConfig.js";
import dotenv from "dotenv";
dotenv.config();

import blogRouter from "./routes/blogRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

DatabaseConnect();

app.use("/api/v1/blog", blogRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}`);
});
