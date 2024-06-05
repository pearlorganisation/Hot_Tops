// ----------------------------------------------Imports----------------------------------------------
import { pizzaCustomizationModel } from "../../../models/foodModels/foodCustomization/pizzaCustomization/pizzaCustomizationModel.js";
import { asyncErrorHandler } from "../../../utils/errors/asyncErrorHandler.js";
import { pick } from "lodash-es";
import { CustomError } from "../../../utils/errors/customError.js";
// ---------------------------------------------------------------------------------------------------

// @url - /customization/?foodCategory=""
// @method - PUT
// @desc - upsertCustomization - controller to update or create the food customization
export const upsertFoodCustomization = asyncErrorHandler(
  async (req, res, next) => {
    const foodCategoryQuery = req.query?.foodCategory
      .toString()
      .toUpperCase()
      .replaceAll(" ", "");

    const { customizationId } = req?.params;

    const payload = req.body?.payload;

    if (!payload) {
      return next(new CustomError("Payload is required", 400));
    }

    const sanitizedPayload = pick(payload, [
      "size",
      "base",
      "sauce",
      "cheese",
      "veggetarianToppings",
      "meatToppings",
      "seafoodToppings",
    ]);

    if (foodCategoryQuery === "PIZZA") {
      await pizzaCustomizationModel.findByIdAndUpdate(
        { _id: customizationId },
        { sanitizedPayload },
        { upsert: true, new: true }
      );
    }

    return res.status(200).json({
      success: true,
      message: `${foodCategoryQuery} Customization Updated Successfully`,
    });
  }
);
