import BLOG from "../model/BLOG.js";
import asyncHandler from "express-async-handler";
import ApiFeatures from "../utils/apiFeature.js";

export const getAllBlogs = asyncHandler(async (req, res) => {
  const totalBlogs = await BLOG.countDocuments();
  const resultPerPage = 7;
  const apiFeature = new ApiFeatures(BLOG.find(), req.query)
    .search()
    .filter()
    .paginate(resultPerPage);

  const blogs = await apiFeature.query;
  const result = await blogs.length;
  const categories = await BLOG.distinct("category");

  if (blogs) {
    res.status(200).json({
      totalBlogs,
      resultPerPage,
      result,
      blogs,
      categories,
    });
  } else {
    res.status(404).json({ message: "No blogs found" });
  }
});

export const getAllBlog = asyncHandler(async (req, res) => {
  const blog = await BLOG.findOne({ _id: req.params.id });
  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(404).json({ message: "No blog found" });
  }
});

export const createNewComment = asyncHandler(async (req, res) => {
  const blog = await BLOG.findById({ _id: req.params.id });
  if (blog) {
    const comment = {
      name: req.body.name,
      comment: req.body.comment,
      user: req.user._id,
    };

    blog.comments.push(comment);

    await blog.save();
    res.status(200).json({ message: "Comment added" });
  } else {
    res.status(404).json({ message: "No blog found" });
  }
});
