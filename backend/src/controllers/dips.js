import { asyncErrorHandler } from "../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../utils/errors/customError.js";
import dips from "../models/dips.js";
export const newDips = asyncErrorHandler(async (req, res, next) => {
  const { price, banner, drink } = req?.body;
  const newDrinkData = await dips.create({
    banner: req?.file?.path,
    price: JSON.parse(price),
    dips,
  });
  res
    .status(201)
    .json({ status: true, message: "New dips created successfully!!" });
});

export const getAllDips = asyncErrorHandler(async (req, res, next) => {
  const data = await dips.find();
  res.status(200).json({ status: true, data });
});
