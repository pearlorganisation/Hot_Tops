import { asyncErrorHandler } from "../utils/errors/asyncErrorHandler.js";
import { sendOrderMail } from "../utils/sendOrderMail.js";



export const OrderMail = asyncErrorHandler(async (req, res, next) => {
  const {email} = req?.body
  console.log(req?.body)

    const { paymentMethode, time,items, totalAmount,orderNumber,orderType } = req?.body?.data;
    const amount= Number(totalAmount.total + totalAmount.deliveryCharge).toFixed(2)

    let paymentMode = ""
    if(paymentMethode==="Cash on delivery" && orderType==="collection"){
paymentMode= "Cash on Collection"
    }
    else{
      paymentMode= paymentMethode
    }
// return null
  
    sendOrderMail(email, orderNumber, amount, time, paymentMode,orderType).then(() => {
          return res
            .status(200)
            .json({ success: true, message: "OTP sent successfully" });
        }
      ).catch((error) => {
        return res.status(400).json({
          success: false,
          message: `Unable to send mail! ${error.message}`,
        });
      });
  });
  