import dessertFilter from "../../models/dessert/dessertFilter.js";
import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";


export const newFilter = asyncErrorHandler(async (req, res, nxt) => {
  const savedFilter = new dessertFilter(req?.body);
  await savedFilter.save();
  res
    .status(200)
    .json({ status: true, message: "Dessert filter created successfully!!" });
});

export const getAllDessertFilter = asyncErrorHandler(async (req, res, next) => {
  const data = await dessertFilter.find();
  res.status(200).json({ status: true, data });
}); 
