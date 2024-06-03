// --------------------------------------------Imports-----------------------------------------------------
import mongoose from "mongoose";
import { pizzaCustomization } from "../../utils/index";
// --------------------------------------------------------------------------------------------------------
const {
  pizzaSizes,
  pizzaBases,
  pizzaSauces,
  pizzaCheeses,
  pizzaVegToppings,
  pizzaMeatToppings,
  pizzaSeafoodToppings,
} = pizzaCustomization;
// --------------------------------------------------------------------------------------------------------

// pizzaCustomizationSchema -- pizza customization schema for customizing the pizza
const pizzaCustomizationSchema = new mongoose.Schema({
  size: {
    name: {
      type: String,
      enum: pizzaSizes,
      default: "SMALL",
    },
    measure: {
      type: String,
      enum: ["15.5", "13.5", "10.5", "7"],
      default: "7",
    },
    price: {
      type: Number,
      enum: [],
    },
  },
  base: {
    name: {
      type: String,
      enum: pizzaBases,
    },
    price: {
      type: Number,
      enum: [],
    },
  },
  sauce: {
    name: {
      type: String,
      enum: pizzaSauces,
    },
    price: {
      single: {
        type: Boolean,
        default: false,
      },
      double: {
        type: Boolean,
        default: false,
      },
    },
  },
  cheese: {
    name: {
      type: String,
      enum: pizzaCheeses,
    },
    price: {
      single: {
        type: Boolean,
        default: false,
      },
      double: {
        type: Boolean,
        default: false,
      },
    },
  },
  veggetarianToppings: {
    name: {
      type: String,
      enum: pizzaVegToppings,
    },
    price: {
      single: {
        type: Boolean,
        default: false,
      },
      double: {
        type: Boolean,
        default: false,
      },
    },
  },
  meatToppings: {
    name: {
      type: String,
      enum: pizzaMeatToppings,
    },
    price: {
      single: {
        type: Boolean,
        default: false,
      },
      double: {
        type: Boolean,
        default: false,
      },
    },
  },
  seafoodToppings: {
    name: {
      type: String,
      enum: pizzaSeafoodToppings,
    },
    price: {
      single: {
        type: Boolean,
        default: false,
      },
      double: {
        type: Boolean,
        default: false,
      },
    },
  },
});

export const foodItemSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: [true, "Food Name is a required field"],
  },
  foodImg: {
    type: String,
    required: [true, "Food Image is a required field"],
  },
  category: {
    type: String,
    enum: ["PIZZA", "SIDES", "DRINKS", "DESSERTS", "DIPS"],
    required: [true, "Food Category is a required field"],
  },
  foodType: {
    String,
    enum: [
      "MEAT",
      "VEGAN_&_GLUTEN_FREE",
      "SEAFOOD",
      "VEGAN",
      "VEGETARIAN",
      "CAKE_&_COOKIES",
      "ICECREAM",
    ],
    required: [true, "Food Type is a required field"],
  },
  customization: {
    type: String,
    default: function () {
      if (this.category === "PIZZA") {
        return pizzaCustomizationSchema;
      } else if (this.category === "DRINKS") {
      } else {
        return "";
      }
    },
  },
  price: {
    type: Number,
    required: [true, "Food Price is a required field"],
  },
});
