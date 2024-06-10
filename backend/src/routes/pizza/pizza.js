import express from "express";
const router = express.Router();
import { upload } from "../../configs/cloudinary.js";
import { createNewPizza, getAllPizza } from "../../controllers/pizza/pizza.js";
import { getAllCategory, newCategory } from "../../controllers/pizza/pizzaCategory.js";
import { getAllFilter, newFilter } from "../../controllers/pizza/pizzaFilter.js";

router
  .route("/")
  .post(upload.single("banner"), createNewPizza)
  .get(getAllPizza);


  router.route("/category").get(getAllCategory).post(newCategory)

  router.route("/filter").get(getAllFilter).post(newFilter)

export default router;