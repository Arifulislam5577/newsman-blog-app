import express from "express";
import {
  createNewComment,
  getAllBlog,
  getAllBlogs,
} from "../controllers/blogController.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.route("/").get(getAllBlogs);
router.route("/:id").get(getAllBlog).post(verifyUser, createNewComment);

export default router;
