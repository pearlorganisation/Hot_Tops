import express from "express";
import {
  deleteAccount,
  login,
  resetPassword,
  signUp,
  updateProfile,
  verifyOtp,
  verifyOtpForDeleteAccount,
  verifyResetPasswordOtp,
} from "../../controllers/auth/auth.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/verifyOtp").post(verifyOtp);
router.route("/updateProfile").post(updateProfile);
router.route("/resetPassword").post(resetPassword);
router.route("/verifyResetPasswordOtp").post(verifyResetPasswordOtp);
router.route("/deleteAccount").post(deleteAccount);
router.route("/verifyOtpForDeleteAccount").post(verifyOtpForDeleteAccount);
export default router;
