import express from "express";
import { getAllBlog, getAllBlogs } from "../controllers/blogController.js";

const router = express.Router();

router.route("/").get(getAllBlogs);
router.route("/:id").get(getAllBlog);

export default router;
