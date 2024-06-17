
import { upload } from "../../configs/cloudinary.js";
import dessert from "../../models/dessert/dessert.js";
import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";

export const newDessert = asyncErrorHandler(async (req, res, next) => {
  const savedData = new dessert({
    ...req?.body,
    banner: req?.file?.path
  });
  await savedData.save();
  res.status(201).json({ status: true, message: "Created Dessert successfully!!" });
});

export const getAllDesserts = asyncErrorHandler(async (req, res, next) => {
  const data = await dessert.find().populate("category").populate("filter");
  res.status(200).json({ status: true, data });
});
