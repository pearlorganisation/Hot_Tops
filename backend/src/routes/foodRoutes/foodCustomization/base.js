// ---------------------------------------------Imports----------------------------------------------------
import express from "express";
import { createBaseCustomization, getAllBaseCustomization, updateBaseCustomization } from "../../../controllers/foodController/foodCustomization/base.js";
// --------------------------------------------------------------------------------------------------------

export const baseCustomizationRouter = express.Router();

baseCustomizationRouter.route("/:id").patch(updateBaseCustomization);

baseCustomizationRouter.route("/").get(getAllBaseCustomization).post(createBaseCustomization);;
