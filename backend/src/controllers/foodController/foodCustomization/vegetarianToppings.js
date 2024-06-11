// ----------------------------------------------Imports----------------------------------------------
import { vegetarianToppingsCustomizationModel } from "../../../models/foodModels/foodCustomization/pizzaCustomization/vegetarianToppings.js";
import { asyncErrorHandler } from "../../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../../utils/errors/customError.js";
// ---------------------------------------------------------------------------------------------------

// @url - /customization/?foodCategory=""
// @method - PUT
// @desc - updateCustomization - controller to update or create the food customization
export const updateVegetarianToppingsCustomization = asyncErrorHandler(async (req, res, next) => {
   

    const { id } = req?.params;

      const isValidId = await vegetarianToppingsCustomizationModel.findByIdAndUpdate(
        id,req?.body
      );

      if (!isValidId)
        return next(new CustomError("No data found with given id!!", 400));

    return res.status(200).json({
      success: true,
      message: `VegetarianToppings Customization Updated Successfully`,
    });
  }
);

export const createVegetarianToppingsCustomization = asyncErrorHandler( async(req,res,next)=>{
  
    const newFoodCustomization = new vegetarianToppingsCustomizationModel({
...req?.body
  })

  await newFoodCustomization.save()
 res.status(201).json({status:true,message:"VegetarianToppings Customization created successfully"})
  }
)

export const getAllVegetarianToppingsCustomization = asyncErrorHandler( async(req,res,next)=>{

  
  const data = await vegetarianToppingsCustomizationModel.find()

 
 res.status(200).json({status:true,message:"VegetarianToppings Customization data found successfully",data})
  }

)