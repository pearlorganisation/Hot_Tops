import mongoose from "mongoose";

const pizzaSchema = new mongoose.Schema(
  {
    pizzaName: {
      type: String,
      required: true,
    },
    filter: {
      type: mongoose.Types.ObjectId,
      ref: "pizzafilter",
      
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "pizzaCategory",
    },
    banner: {
      type: String,
      required: true,
    },
    priceSection: [{ price: Number, size: String }],
  },
  { timestamps: true }
);

export default mongoose.model("pizzas", pizzaSchema, "pizza");
