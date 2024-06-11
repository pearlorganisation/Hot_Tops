// ---------------------------------------------Imports----------------------------------------------------
import express from "express";
import { createVegetarianToppingsCustomization, getAllVegetarianToppingsCustomization, updateVegetarianToppingsCustomization } from "../../../controllers/foodController/foodCustomization/vegetarianToppings.js";
// --------------------------------------------------------------------------------------------------------

export const vegetarianToppingsCustomizationRouter = express.Router();

vegetarianToppingsCustomizationRouter.route("/:id").patch(updateVegetarianToppingsCustomization);

vegetarianToppingsCustomizationRouter.route("/").get(getAllVegetarianToppingsCustomization).post(createVegetarianToppingsCustomization);;
