import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";
import category from "../../models/pizza/category.js";

export const newCategory = asyncErrorHandler(async (req, res, nxt) => {
  const savedCategory = new category(req?.body);
  await savedCategory.save();
  res
    .status(200)
    .json({ status: true, message: "Pizza category created successfully!!" });
});

export const getAllCategory = asyncErrorHandler(async (req, res, next) => {
  const data = await category.find();
  res.status(200).json({ status: true, data });
});
