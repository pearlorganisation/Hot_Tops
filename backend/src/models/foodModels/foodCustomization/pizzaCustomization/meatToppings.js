// -------------------------------------------Imports------------------------------------------------------
import mongoose from "mongoose";
// ----------------------------------------------------------------------------------------------------------

const meatToppingsCustomizationSchema = new mongoose.Schema({
 
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
      }
 
});

export const 
meatToppingsCustomizationModel = mongoose.model(
  "meatToppings_Customization",
  meatToppingsCustomizationSchema
);





