import { asyncErrorHandler } from "../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../utils/errors/customError.js";
import dipsModel from "../models/dips.js";
export const newDips = asyncErrorHandler(async (req, res, next) => {
  const { price,dips } = req?.body;
  const newDipData = await dipsModel.create({
    banner: req?.file?.path,
    price: JSON.parse(price),
    dips
  });
  res
    .status(201)
    .json({ status: true, message: "New dips created successfully!!" });
});

export const getAllDips = asyncErrorHandler(async (req, res, next) => {
  const data = await dipsModel.find();
  res.status(200).json({ status: true, data });
});
