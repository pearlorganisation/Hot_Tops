// -------------------------------------------Imports------------------------------------------------------
import mongoose from "mongoose";
// ----------------------------------------------------------------------------------------------------------

const pizzaCustomizationSchema = new mongoose.Schema({
  size: [
    {
      name: {
        type: String,
        required: [true, "Size Name is a required field"],
      },
      price: {
        type: Number,
        required: [true, "Size Price is a required field"],
      },
    },
  ],
  base: [
    {
      name: {
        type: String,
        required: [true, "Base name is a required field"],
      },
      price: {
        type: Number,
        required: [true, "Base Price is a required field"],
      },
    },
  ],
  sauce: [
    {
      name: {
        type: String,
        required: [true, "Sauce Name is a required field"],
      },
      singlePrice: {
        type: Number,
        required: [true, "Sauce Price is a required field"],
      },
      doublePrice: {
        type: Number,
        required: [true, "Sauce Price is a required field"],
      },
    },
  ],
  cheese: [
    {
      name: {
        type: String,
        required: [true, "Cheese Name is a required field"],
      },
      singlePrice: {
        type: Number,
        required: [true, "Cheese Price is a required field"],
      },
      doublePrice: {
        type: Number,
        required: [true, "Cheese Price is a required field"],
      },
    },
  ],
  veggetarianToppings: [
    {
      name: {
        type: String,
        required: [true, "Veggetarian Toppings Name is a required field"],
      },
      singlePrice: {
        type: Number,
        required: [true, "Veggetarian Toppings Price is a required field"],
      },
      doublePrice: {
        type: Number,
        required: [true, "Veggetarian Toppings Price is a required field"],
      },
    },
  ],
  meatToppings: [
    {
      name: {
        type: String,
        required: [true, "Meat Toppings Name is a required field"],
      },
      singlePrice: {
        type: Number,
        required: [true, "meatToppings Price is a required field"],
      },
      doublePrice: {
        type: Number,
        required: [true, "meatToppings Price is a required field"],
      },
    },
  ],
  seafoodToppings: [
    {
      name: {
        type: String,
        required: [true, "Seafood Toppings Name is a required field"],
      },
      singlePrice: {
        type: Number,
        required: [true, "sea food price Price is a required field"],
      },
      doublePrice: {
        type: Number,
        required: [true, "seafood Price is a required field"],
      },
    },
  ],
});

export const 
pizzaCustomizationModel = mongoose.model(
  "pizzaCustomization",
  pizzaCustomizationSchema
);





