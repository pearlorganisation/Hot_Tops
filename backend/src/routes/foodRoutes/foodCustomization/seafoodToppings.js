// ---------------------------------------------Imports----------------------------------------------------
import express from "express";
import { createSeafoodToppingsCustomization, deleteSeafoodToppingsCustomization, getAllSeafoodToppingsCustomization, updateSeafoodToppingsCustomization } from "../../../controllers/foodController/foodCustomization/seafoodToppings.js";
// --------------------------------------------------------------------------------------------------------

export const seafoodToppingsCustomizationRouter = express.Router();

seafoodToppingsCustomizationRouter.route("/:id").patch(updateSeafoodToppingsCustomization).delete(deleteSeafoodToppingsCustomization);

seafoodToppingsCustomizationRouter.route("/").get(getAllSeafoodToppingsCustomization).post(createSeafoodToppingsCustomization);;
