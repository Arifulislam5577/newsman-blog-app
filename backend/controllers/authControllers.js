import asyncHandler from "express-async-handler";
import USER from "../model/USER.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await USER.findOne({ email });

  if (user) {
    res.status(400);
    throw new Error("Email already exists");
  } else if (!user) {
    const user = await USER.create({ name, email, password });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    }
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await USER.findOne({ email });
  if (!user) {
    res.status(401);
    throw new Error("Invalid email or password");
  } else if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      email: user.email,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
