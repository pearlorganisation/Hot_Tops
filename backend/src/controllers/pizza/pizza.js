import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";
import pizza from "../../models/pizza/pizza.js";

export const createNewPizza = asyncErrorHandler(async (req, res, next) => {
  const data = JSON.parse(req?.body?.data);
  const { small, medium, large, supersize, ...rest } = data;
  console.log(rest);
  const priceSection = [{ small }, { medium }, { large }, { supersize }];
  const newPizza = await new pizza({
    ...rest,
    banner: req?.file?.path,
    priceSection: priceSection,
  });
  await newPizza.save();
  res
    .status(200)
    .json({ status: true, message: "Pizza created csuccessfully!!" ,newPizza});
});

export const getAllPizza = asyncErrorHandler(async (req, res, next) => {
  const data = await pizza.find().populate("category").populate("filter");
  res.status(200).json({ status: true, data });
});
