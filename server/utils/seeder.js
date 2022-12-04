import mongoose from "mongoose";
import BLOG from "../model/BLOG.js";
import dotenv from "dotenv";
dotenv.config();
import { blogs } from "../utils/blogs.js";
import DatabaseConnect from "../DbConfig/DbConfig.js";

DatabaseConnect();

const seedBlogs = async () => {
  try {
    await BLOG.deleteMany();
    console.log("blog deleted");
    await BLOG.insertMany(blogs);
    console.log("blog added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedBlogs();
