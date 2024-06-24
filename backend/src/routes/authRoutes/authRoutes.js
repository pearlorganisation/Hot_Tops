import express from "express";
import {
  login,
  resetPassword,
  signUp,
  updateProfile,
  verifyOtp,
  verifyResetPasswordOtp,
} from "../../controllers/auth/auth.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/verifyOtp").post(verifyOtp);
router.route("/updateProfile").post(updateProfile);
router.route("/resetPassword").post(resetPassword);
router.route("/verifyResetPasswordOtp").post(verifyResetPasswordOtp);

export default router;
