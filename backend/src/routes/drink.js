import express from "express";
import { getAllDrink, newDrink } from "../controllers/drink.js";
import { upload } from "../configs/cloudinary.js";
const router = express.Router();

router.route("/").get(getAllDrink).post(upload.single("banner"), newDrink);

export default router;
