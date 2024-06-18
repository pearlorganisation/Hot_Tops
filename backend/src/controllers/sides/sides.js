import sides from "../../models/sides/sides.js";
import { upload } from "../../configs/cloudinary.js";
import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";

export const newSides = asyncErrorHandler(async (req, res, next) => {
  const savedData = new sides({
    ...req?.body,
    banner: req?.file?.path,
  });
  await savedData.save();
  res.status(201).json({ status: true, message: "Created successfully!!" });
});

export const getAllSides = asyncErrorHandler(async (req, res, next) => {
  const data = await sides.find().populate("category").populate("filter");
  res.status(200).json({ status: true, data });
});
