import express from "express";
const router = express.Router();
import { newDips,getAllDips } from "../controllers/dips.js";
import { upload } from "../configs/cloudinary.js";

router.route("/").get(getAllDips).post(upload.single("banner"),newDips)
export default router;
