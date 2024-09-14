import express from "express";
import {
  getAllOrders,
  getOrderWithOrderCode,
  getParticularUserOrders,
  newOrder,
  onlineOrder,
  updateCompleteOrder,
} from "../controllers/order.js";

const router = express.Router();

router.route("/:userId").get(getParticularUserOrders);
router.route("/").post(newOrder).get(getAllOrders);
router.route("/:id").patch(updateCompleteOrder);
router.route("/create-viva-order").post(onlineOrder);
router.route("/paymentStatus/:orderCode").get(getOrderWithOrderCode);


export default router;
