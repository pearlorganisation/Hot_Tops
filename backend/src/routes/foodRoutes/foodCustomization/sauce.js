// ---------------------------------------------Imports----------------------------------------------------
import express from "express";
import { createSauceCustomization, getAllSauceCustomization, updateSauceCustomization } from "../../../controllers/foodController/foodCustomization/sauce.js";
// --------------------------------------------------------------------------------------------------------

export const sauceCustomizationRouter = express.Router();

sauceCustomizationRouter.route("/:id").patch(updateSauceCustomization);

sauceCustomizationRouter.route("/").get(getAllSauceCustomization).post(createSauceCustomization);;
