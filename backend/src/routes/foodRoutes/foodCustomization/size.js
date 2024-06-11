// ---------------------------------------------Imports----------------------------------------------------
import express from "express";
import { createSizeCustomization, getAllSizeCustomization, updateSizeCustomization } from "../../../controllers/foodController/foodCustomization/size.js";
// --------------------------------------------------------------------------------------------------------

export const sizeCustomizationRouter = express.Router();

sizeCustomizationRouter.route("/:id").patch(updateSizeCustomization);

sizeCustomizationRouter.route("/").get(getAllSizeCustomization).post(createSizeCustomization);;
