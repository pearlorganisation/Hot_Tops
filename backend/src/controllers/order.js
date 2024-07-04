import order from "../models/order.js";
import { asyncErrorHandler } from "../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../utils/errors/customError.js";

export const newOrder = asyncErrorHandler(async (req, res, next) => {

    const newOrder = new order(
      req?.body
    );
    
    // newOrder.calculateTotalPrice();

    await newOrder.save();
    
    res
      .status(201)
      .json({ status: true, message: "New Order created successfully"});
  });

export const getAllOrders = asyncErrorHandler(async (req, res, next) => {

    const data = await order.find();
    res
      .status(200)
      .json({ status: true, message: "All Orders Found successfully"}, data);
  });

export const getParticularUserOrders = asyncErrorHandler(async (req, res, next) => {
const {userId}= req?.params
    const data = await order.findOne({orderBy:userId});
    res
      .status(200)
      .json({ status: true, message: "User Orders Found successfully"}, data);
  });