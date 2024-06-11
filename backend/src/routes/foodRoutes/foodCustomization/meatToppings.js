// ---------------------------------------------Imports----------------------------------------------------
import express from "express";
import { createMeatToppingsCustomization, getAllMeatToppingsCustomization, updateMeatToppingsCustomization } from "../../../controllers/foodController/foodCustomization/meatToppings.js";
// --------------------------------------------------------------------------------------------------------

export const meatToppingsCustomizationRouter = express.Router();

meatToppingsCustomizationRouter.route("/:id").patch(updateMeatToppingsCustomization);

meatToppingsCustomizationRouter.route("/").get(getAllMeatToppingsCustomization).post(createMeatToppingsCustomization);;
