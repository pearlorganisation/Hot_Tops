import express from "express";
import { upload } from "../configs/cloudinary.js";
import { getAllDesserts, newDessert } from "../controllers/dessert/dessert.js";
import { getAllCategory, newCategory } from "../controllers/dessert/dessertCategory.js";
import {getAllDessertFilter,newFilter} from "../controllers/dessert/dessertFilter.js"



const router = express.Router();

router.route("/").get(getAllDesserts).post(upload.single("banner"), newDessert);
router.route("/category").get(getAllCategory).post(newCategory);
router.route("/filter").get(getAllDessertFilter).post(newFilter)

export default router;
