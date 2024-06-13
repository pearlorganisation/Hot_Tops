import express from "express";
import { signUp } from "../../controllers/auth/auth.js";

const router = express.Router();

router.route("/").post(signUp);

export default router;
