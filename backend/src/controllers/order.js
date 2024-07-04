import order from "../models/order.js";

import { asyncErrorHandler } from "../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../utils/errors/customError.js";

export const newOrder = asyncErrorHandler(async (req, res, next) => {
  const orders = await order.find();

  const count = orders.length + 1;

  const newOrder = new order({ ...req?.body, orderNumber: count });

  // newOrder.calculateTotalPrice();

  await newOrder.save();

  res
    .status(201)
    .json({ status: true, message: "New Order created successfully" });
});

export const getAllOrders = asyncErrorHandler(async (req, res, next) => {
  const data = await order.find();
  res
    .status(200)
    .json({ status: true, message: "All Orders Found successfully" }, data);
});

export const getParticularUserOrders = asyncErrorHandler(
  async (req, res, next) => {
    const { userId } = req?.params;
    console.log(userId);
    const data = await order.find({ orderBy: userId });
    if (!data) {
      return res.status(400).json({ status: false, message: "no order found" });
    }
    res
      .status(200)
      .json({ status: true, message: "User Orders Found successfully", data });
  }
);
