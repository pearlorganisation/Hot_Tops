import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";
import sidesCategory from "../../models/sides/sidesCategory.js";

export const newCategory = asyncErrorHandler(async (req, res, nxt) => {
  const savedCategory = new sidesCategory(req?.body);
  await savedCategory.save();
  res
    .status(200)
    .json({ status: true, message: "Sides category created successfully!!" });
});

export const getAllCategory = asyncErrorHandler(async (req, res, next) => {
  const data = await sidesCategory.find();
  res.status(200).json({ status: true, data });
});
