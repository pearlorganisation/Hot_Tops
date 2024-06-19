import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../utils/errors/customError.js";
import sidesFilter from "../../models/sides/sidesFilter.js";

export const newFilter = asyncErrorHandler(async (req, res, nxt) => {
  const savedFilter = new sidesFilter(req?.body);
  await savedFilter.save();
  res
    .status(200)
    .json({ status: true, message: "Sides filter created successfully!!" });
});

export const getAllSidesFilter = asyncErrorHandler(async (req, res, next) => {
  const data = await sidesFilter.find();
<<<<<<< HEAD
  
  
  res.status(200).json({ status: true, data });
=======
  const newData = [{ filter: "All" }, ...data];
  res.status(200).json({ status: true, data: newData });
>>>>>>> 934c27bf1611042ac196ac5e7780fec3fd14bc7b
});
