// -------------------------------------------Imports------------------------------------------------------
import mongoose from "mongoose";
// ----------------------------------------------------------------------------------------------------------

const baseCustomizationSchema = new mongoose.Schema({
      name: {
        type: String,
        required: [true, "Base name is a required field"],
      },
      price: {
        type: Number,
        required: [true, "Base Price is a required field"],
      },
    }
);

export const 
baseCustomizationModel = mongoose.model(
  "base_Customization",
  baseCustomizationSchema
);





