import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";
import pizza from "../../models/pizza/pizza.js";

export const createNewPizza = asyncErrorHandler(async (req, res, next) => {
  const data = JSON.parse(req?.body?.data);
  console.log(data);
  // const { small, medium, large, supersize, ...rest } = data;
  const keys = Object.keys(data);

  const priceSection = [
    { size: "small", price: data?.small },
    { size: "large", price: data?.large },
    { size: "medium", price: data?.medium },
    { size: "supersize", price: data?.supersize },
  ];
  console.log(priceSection);
  const newPizza = await new pizza({
    ...data,
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
