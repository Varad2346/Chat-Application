import express from "express";
import { register,login,getUsers } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.get("/getusers",getUsers);

router.post("/login", login);

export default router;