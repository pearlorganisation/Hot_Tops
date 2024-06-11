// ---------------------------------------------Imports----------------------------------------------------
import express from "express";
import { createSeafoodToppingsCustomization, getAllSeafoodToppingsCustomization, updateSeafoodToppingsCustomization } from "../../../controllers/foodController/foodCustomization/seafoodToppings.js";
// --------------------------------------------------------------------------------------------------------

export const seafoodToppingsCustomizationRouter = express.Router();

seafoodToppingsCustomizationRouter.route("/:id").patch(updateSeafoodToppingsCustomization);

seafoodToppingsCustomizationRouter.route("/").get(getAllSeafoodToppingsCustomization).post(createSeafoodToppingsCustomization);;
