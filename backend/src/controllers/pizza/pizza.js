import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";
import pizza from "../../models/pizza/pizza.js";

export const createNewPizza = asyncErrorHandler(async (req, res, next) => {
const  {priceSection}= req?.body

  const newPizza = new pizza({
    ...req?.body,
    banner: req?.file?.path,
    priceSection: JSON.parse(priceSection),
  });
  await newPizza.save();
  res
    .status(200)
    .json({ status: true, message: "Pizza created successfully!!" ,newPizza});
});

export const getAllPizza = asyncErrorHandler(async (req, res, next) => {
  const data = await pizza.find().populate("category").populate("filter");
  res.status(200).json({ status: true, data });
});
