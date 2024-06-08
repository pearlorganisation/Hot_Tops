import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";
import pizza from "../../models/pizza/pizza.js";

export const createNewPizza = asyncErrorHandler(async (req, res, next) => {
  console.log(req?.body, req?.body?.priceSection);
  const newPizza = await new pizza({
    ...req?.body,
    banner: req?.file?.path,
    priceSection: JSON.parse(req?.body?.priceSection),
  });
  await newPizza.save();
  res
    .status(200)
    .json({ status: true, message: "Pizza created csuccessfully!!" });
});

export const getAllPizza = asyncErrorHandler(async (req, res, next) => {
  const data = await pizza.find().populate("category").populate("filter");
  res.status(200).json({ status: true, data });
});
