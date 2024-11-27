import express from "express";
import {
  checkTransaction,
  deleteFailedPayment,
  getAllOrders,
  getOrderFromOrderCode,
  getParticularUserOrders,
  newOrder,
  onlineOrder,
  updateCompleteOrder,
} from "../controllers/order.js";

const router = express.Router();

router.route("/:userId").get(getParticularUserOrders);
router.route("/").post(newOrder).get(getAllOrders).delete(deleteFailedPayment);
router.route("/:id").patch(updateCompleteOrder);
router.route("/create-viva-order").post(onlineOrder);
router.route("/checkTransaction/:transactionId").post(checkTransaction);
router.route("/getFromOrderCode/:orderCode").get(getOrderFromOrderCode);



export default router;
