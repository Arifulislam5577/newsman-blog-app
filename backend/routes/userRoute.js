import express from "express";
import { registerUser, login } from "../controllers/authControllers.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(login);

export default router;
