import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const dealSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title Required"],
    },
    banner: {
      type: String,
      required: [true, "Banner Image Required"],
    },
    sizes: {
      type: [sizeSchema],
      required: true,
    },
    chooseItems: {
      pizza: {
        type: Number,
        default: 0,
      },
      dips: {
        type: Number,
        default: 0,
      },
      drinks: {
        type: Number,
        default: 0,
      },
      dessert: {
        type: Number,
        default: 0,
      },
    },
    defaultItems: {
      type: [String],
      default: [],
    },
    defaultDrinkType: {
      type: String,
      required: [true, "Default Drink Type is required"],
      default: "can",
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("deals", dealSchema, "deals");
