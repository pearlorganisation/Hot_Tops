import express from "express";
import { login, signUp, verifyOtp } from "../../controllers/auth/auth.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/verifyOtp").post(verifyOtp);

export default router;
