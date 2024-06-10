import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";

import filter from "../../models/pizza/filter.js";

export const newFilter = asyncErrorHandler(async (req, res, nxt) => {
  const savedFilter = new filter(req?.body);
  await savedFilter.save();
  res
    .status(200)
    .json({ status: true, message: "Pizza filter created successfully!!" });
});

export const getAllFilter = asyncErrorHandler(async (req, res, next) => {
  const data = await filter.find();
  res.status(200).json({ status: true, data });
});
