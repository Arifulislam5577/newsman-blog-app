import express from "express";
import cors from "cors";
import DatabaseConnect from "./DbConfig/DbConfig.js";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

import blogRouter from "./routes/blogRoute.js";
import userRouter from "./routes/userRoute.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

DatabaseConnect();

app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/user", userRouter);

// --------------------------deployment------------------------------

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve("frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}`);
});
