import express from "express";
import { login, register } from "../controllers/user.js";

const router = express.Router();

router.post("/new", register);
router.get("/me", login);

export default router;
