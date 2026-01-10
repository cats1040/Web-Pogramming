import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import UserModel from "../models/users.js";

router.post("/register", async (req, res) => {
  const newUser = req.body;
  console.log("New user to be added ", newUser);

  await UserModel.createNewUser(
    newUser,
    (createdUser) => {
      res.status(201).json(createdUser);
    },
    (error) => {
      console.error("Error adding user: ", error?.message);
      res.status(500).json({ error: "Failed to add new user" });
    }
  );
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log("Signin request for email: ", email);

  await UserModel.signin(
    email,
    password,
    (user) => {
      res.status(200).json(user);
    },
    (error) => {
      console.error("Error signing in: ", error?.message);
      res.status(401).json({ error: "Authentication failed" });
    }
  );
});

export default router;
