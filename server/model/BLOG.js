import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
});

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    comments: [commentSchema],
  },
  { timestamps: true }
);

const BLOG = mongoose.model("BLOG", blogSchema);

export default BLOG;
