// -------------------------------------------Imports------------------------------------------------------
import mongoose from "mongoose";
// ----------------------------------------------------------------------------------------------------------

const cheeseCustomizationSchema = new mongoose.Schema({
 
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
    }
);

export const 
cheeseCustomizationModel = mongoose.model(
  "cheese_Customization",
  cheeseCustomizationSchema
);





