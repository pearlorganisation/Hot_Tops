// -------------------------------------------Imports------------------------------------------------------
import mongoose from "mongoose";
// ----------------------------------------------------------------------------------------------------------

const sauceCustomizationSchema = new mongoose.Schema({
 
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
sauceCustomizationModel = mongoose.model(
  "sauce_Customization",
  sauceCustomizationSchema
);





