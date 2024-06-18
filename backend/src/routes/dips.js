import express from "express";
const router = express.Router();
import { newDips,getAllDips } from "../controllers/dips.js";

router.route("/").get(getAllDips).post(newDips)
export default router;
