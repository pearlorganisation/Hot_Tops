import express from "express";
import { upload } from "../configs/cloudinary.js";
import { getAllSides, newSides } from "../controllers/sides/sides.js";
import {
  getAllCategory,
  newCategory,
} from "../controllers/sides/sidesCategory.js";
import { getAllSidesFilter, newFilter } from "../controllers/sides/sidesFilter.js";

const router = express.Router();

router.route("/").get(getAllSides).post(upload.single("banner"), newSides);
router.route("/category").get(getAllCategory).post(newCategory);
router.route("/filter").get(getAllSidesFilter).post(newFilter)

export default router;
