import order from "../models/order.js";
import Stripe from "stripe"
import { asyncErrorHandler } from "../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../utils/errors/customError.js";

export const newOrder = asyncErrorHandler(async (req, res, next) => {
  const orders = await order.find();
  const count = orders.length + 1;
  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  const newOrder = new order({
    ...req?.body,
    count,
    orderAt: getCurrentDateTime(),
  });

  // newOrder.calculateTotalPrice();

  await newOrder.save();

  res
    .status(201)
    .json({ status: true, message: "New Order created successfully" });
});

export const getAllOrders = asyncErrorHandler(async (req, res, next) => {
  const data = await order.find().sort({createdAt:-1}).populate("orderBy");
  
  res.status(200).json({ status: true, message: "All Orders Found successfully", data });
});

export const getParticularUserOrders = asyncErrorHandler(
  async (req, res, next) => {
    const { userId } = req?.params;
    console.log(userId);
    const data = await order.find({ orderBy: userId }).sort({createdAt:-1});
    if (!data) {
      return res.status(400).json({ status: false, message: "no order found" });
    }
    res
      .status(200)
      .json({ status: true, message: "User Orders Found successfully", data });
  }
);

export const updateCompleteOrder = asyncErrorHandler(async (req, res, next) => {
  const {id}= req?.params
  const {isCompleted}= req?.body
    const data = await order.findByIdAndUpdate(id,{orderStatus:isCompleted});
    if(!data){
      return next( new errorResponse("Id is not valid to complete the order",400))
    }
    res.status(200).json({
      status: true,
      message:"Order completed successfully!" ,
    });
  });

  export const onlineOrder = asyncErrorHandler(async (req, res, next) => {

    const {items,email}= req?.body

    const lineItems = items?.map((item)=>({
      price_data:{
        currency:"GBP",
        product_data:{
          name:item.name
        },
        unit_amount:Math.round(item.totalSum*100)    
      },
      quantity:item.quantity
    }))

    const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

   const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    line_items:lineItems,
    customer_email: email,
    mode:"payment",
    success_url:process.env.STRIPE_SUCCESS_URL,
    cancel_url:process.env.STRIPE_CANCEL_URL,
   })

res.json({id:session.id})
  })