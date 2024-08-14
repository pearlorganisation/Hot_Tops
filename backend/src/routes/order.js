import express from "express";
import {
  getAllOrders,
  getParticularUserOrders,
  newOrder,
  updateCompleteOrder,
} from "../controllers/order.js";

const router = express.Router();

router.route("/:userId").get(getParticularUserOrders);
router.route("/").post(newOrder).get(getAllOrders);
router.route("/:id").patch(updateCompleteOrder)

export default router;
