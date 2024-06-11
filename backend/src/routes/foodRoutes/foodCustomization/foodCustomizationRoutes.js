// ---------------------------------------------Imports----------------------------------------------------
import express from "express";
import { createFoodCustomization, getAllFoodCustomization, upsertFoodCustomization } from "../../../controllers/foodController/foodCustomization/foodCustomizationController.js";
// --------------------------------------------------------------------------------------------------------

export const foodCustomizationRouter = express.Router();

foodCustomizationRouter.route("/:id").put(upsertFoodCustomization);

foodCustomizationRouter.route("/").get(getAllFoodCustomization).post(createFoodCustomization);;


// upsertCustomization
