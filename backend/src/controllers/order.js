import order from "../models/order.js";
// import Stripe from "stripe"
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

//   export const onlineOrder = asyncErrorHandler(async (req, res, next) => {

//     const {items,email}= req?.body

//     const lineItems = items?.map((item)=>({
//       price_data:{
//         currency:"GBP",
//         product_data:{
//           name:item.name
//         },
//         unit_amount:Math.round(item.totalSum*100)    
//       },
//       quantity:item.quantity
//     }))

//     const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

//    const session = await stripe.checkout.sessions.create({
//     payment_method_types:["card"],
//     line_items:lineItems,
//     customer_email: email,
//     mode:"payment",
//     success_url:process.env.STRIPE_SUCCESS_URL,
//     cancel_url:process.env.STRIPE_CANCEL_URL,
//    })

// res.json({id:session.id})
//   })

  export const onlineOrder = asyncErrorHandler(async (req, res, next) => {

    const {amount,customer} = req.body

    // const generateToken = await fetch("https://accounts.vivapayments.com/connect/token", {
    const generateToken = await fetch("https://demo-accounts.vivapayments.com/connect/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        // client_id: '56sucz9t1my1w6c5axz8vkf5o5mf2ff77rbooqhugot14.apps.vivapayments.com',  
        // client_secret: 't6Ay63s2da78pir3f98WvJNV0W4hBW', 
        client_id: 'wc37z4tch73nk3amxt162fy8nxa0301wndrxs680ach73.apps.vivapayments.com',  
        client_secret: 'tyd8a7GJZFQ5Zsb8s3QTJ8X087POaW', 
        scope: 'urn:viva:payments:core:api:redirectcheckout', 
      }),
    });

    const response = await generateToken.json();

    if (!generateToken.ok) {
      return next(new CustomError(response, 400));
    }

    console.log(response)

    // const responseOrder = await fetch("https://api.vivapayments.com/checkout/v2/orders", {
    const responseOrder = await fetch("https://demo-api.vivapayments.com/checkout/v2/orders", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
    'Authorization': `Bearer ${response.access_token}`
      },

      body: JSON.stringify({
        "amount": amount,
        "customer" : {
          email : customer.email,
          fullName : customer.fullName,
          phone: customer.phone
        }
      
      }),
    });

    const finalResult= await responseOrder.json()
    console.log(finalResult)
    if (!responseOrder.ok) {
      return next(new CustomError(finalResult, 400));
    }

     res.status(200).json(finalResult);
     
  })

  export const transactionCreatedWebHook = asyncErrorHandler( async(req,res,next)=>{
    
    // const Username = '69b72cc2-a7a9-44da-95c2-bfab799198b1';  // Replace with your merchant ID
// const Password = 'JMGP469tP6o3u7feHc9C5w68F179AB'; 
    const Username = 'ebc52109-c09b-4c9f-a96d-415bafb43aa9';  // Replace with your merchant ID
const Password = 'GlmfBP'; 

    // const generateToken = await fetch("https://www.vivapayments.com/api/messages/config/token",{
    const generateToken = await fetch("https://demo.vivapayments.com/api/messages/config/token",{
      method:"GET",
      headers:{
             'Content-Type': 'application/json',
    'Authorization': `Basic ${btoa(`${Username}:${Password}`)}`
      },
    })

    const response = await generateToken.json();

    if (!generateToken.ok) {
      return next(new CustomError(response, 400));
    }

    console.log(response,"acnsa")

    res.status(200).json(response)

  })


  export const webhookResponse = asyncErrorHandler(async (req, res, next) => {
    const data = req.body;
  
    // Validate incoming data
    if (!data || !data.EventData) {
      return res.status(400).json({ message: "Error: Missing data or EventData" });
    }
  
    const transactionId = data.EventData.TransactionId;
    console.log(transactionId);
  
    // const generateToken = await fetch("https://accounts.vivapayments.com/connect/token", {
      const generateToken = await fetch("https://demo-accounts.vivapayments.com/connect/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          // client_id: '56sucz9t1my1w6c5axz8vkf5o5mf2ff77rbooqhugot14.apps.vivapayments.com',  
          // client_secret: 't6Ay63s2da78pir3f98WvJNV0W4hBW', 
          client_id: 'wc37z4tch73nk3amxt162fy8nxa0301wndrxs680ach73.apps.vivapayments.com',  
          client_secret: 'tyd8a7GJZFQ5Zsb8s3QTJ8X087POaW', 
          scope: 'urn:viva:payments:core:api:redirectcheckout', 
        }),
      });
  
      const response = await generateToken.json();
  
      if (!generateToken.ok) {
        return next(new CustomError(response, 400));
      }
  
      console.log(response)
  
    const accessToken = response.access_token; // Extract the OAuth2 access token
  
    // Step 2: Use the access token to call the transaction API
    const transactionResponse = await fetch(`https://demo-api.vivapayments.com/checkout/v2/transactions/${transactionId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      }
    });
  
    const transactionData = await transactionResponse.json();
  
    if (!transactionResponse.ok) {
      return next(new CustomError(transactionData, 400));
    }
  
    console.log(transactionData); // Log the transaction data for debugging
  
    // Return the transaction data in response
    res.status(200).json({ status: true, data: transactionData });
  });
  















  