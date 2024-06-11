// ---------------------------------------------Imports----------------------------------------------------
import express from "express";
import { createCheeseCustomization, getAllCheeseCustomization, updateCheeseCustomization } from "../../../controllers/foodController/foodCustomization/cheese.js";
// --------------------------------------------------------------------------------------------------------

export const cheeseCustomizationRouter = express.Router();

cheeseCustomizationRouter.route("/:id").patch(updateCheeseCustomization);

cheeseCustomizationRouter.route("/").get(getAllCheeseCustomization).post(createCheeseCustomization);;
