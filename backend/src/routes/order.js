import express from "express";
import {
  checkTransaction,
  getAllOrders,
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
router.route("/checkTransaction/:transactionId").get(checkTransaction);


export default router;
