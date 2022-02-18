import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    description: { type: Array, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const BLOG = mongoose.model("BLOG", blogSchema);

export default BLOG;
