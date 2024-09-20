import { asyncErrorHandler } from "../utils/errors/asyncErrorHandler.js";
import { sendOrderMail } from "../utils/sendOrderMail.js";



export const OrderMail = asyncErrorHandler(async (req, res, next) => {
   console.log(req?.body)
   const {email} = req?.body
    const { paymentMethode, time, totalAmount,orderNumber,orderType } = req?.body?.data;
    const amount= (totalAmount.total + totalAmount.deliveryCharge - totalAmount.discountPrice).toFixed(2)

  
    sendOrderMail(email, orderNumber, amount, time, paymentMethode,orderType).then(() => {
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
  