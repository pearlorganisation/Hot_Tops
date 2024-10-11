import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    banner: { type: String, required: true },
    deal:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"deals"
    }
  },
  { timestamps: true }
);

export default mongoose.model("banner", bannerSchema, "banner");
