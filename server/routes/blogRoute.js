import express from "express";
import {
  createBlog,
  createNewComment,
  deleteBlogPost,
  getAllBlog,
  getAllBlogs,
} from "../controllers/blogController.js";
import { verifyUser, verifyUserAndAdmin } from "../utils/verifyUser.js";

const router = express.Router();

router.route("/").get(getAllBlogs).post(verifyUserAndAdmin, createBlog);
router
  .route("/:id")
  .get(getAllBlog)
  .post(verifyUser, createNewComment)
  .delete(verifyUserAndAdmin, deleteBlogPost);

export default router;
