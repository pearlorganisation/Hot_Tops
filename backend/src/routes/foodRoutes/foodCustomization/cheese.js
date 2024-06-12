// ---------------------------------------------Imports----------------------------------------------------
import express from "express";
import { createCheeseCustomization, deleteCheeseCustomization, getAllCheeseCustomization, updateCheeseCustomization } from "../../../controllers/foodController/foodCustomization/cheese.js";
// --------------------------------------------------------------------------------------------------------

export const cheeseCustomizationRouter = express.Router();

cheeseCustomizationRouter.route("/:id").patch(updateCheeseCustomization).delete(deleteCheeseCustomization);

cheeseCustomizationRouter.route("/").get(getAllCheeseCustomization).post(createCheeseCustomization);;
