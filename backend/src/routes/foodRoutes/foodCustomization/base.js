// ---------------------------------------------Imports----------------------------------------------------
import express from "express";
import { createBaseCustomization, deleteBaseCustomization, getAllBaseCustomization, updateBaseCustomization } from "../../../controllers/foodController/foodCustomization/base.js";
// --------------------------------------------------------------------------------------------------------

export const baseCustomizationRouter = express.Router();

baseCustomizationRouter.route("/:id").patch(updateBaseCustomization).delete(deleteBaseCustomization);

baseCustomizationRouter.route("/").get(getAllBaseCustomization).post(createBaseCustomization);;
