import dessertCategory from "../../models/dessert/dessertCategory.js";
import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";


export const newCategory = asyncErrorHandler(async (req, res, nxt) => {
  const savedCategory = new dessertCategory(req?.body);
  await savedCategory.save();
  res
    .status(200)
    .json({ status: true, message: "Dessert category created successfully!!" });
});

export const getAllCategory = asyncErrorHandler(async (req, res, next) => {
  const data = await dessertCategory.find();
  res.status(200).json({ status: true, data });
});
