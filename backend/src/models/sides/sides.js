import mongoose from "mongoose";

const sidesSchema = new mongoose.Schema(
  {
    sideName: { type: String, required: true },
    banner: { type: String, required: true },
    priceSection: [{ size: String, price: String }],
    category: {
      type: mongoose.Types.ObjectId,
      ref: "sidesCategory",
      required: true,
    },
    filter: {
      type: mongoose.Types.ObjectId,
      ref: "sidesFilter",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("sides", sidesSchema, "sides");
