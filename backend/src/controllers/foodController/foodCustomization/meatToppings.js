// ----------------------------------------------Imports----------------------------------------------
import { meatToppingsCustomizationModel } from "../../../models/foodModels/foodCustomization/pizzaCustomization/meatToppings.js";
import { asyncErrorHandler } from "../../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../../utils/errors/customError.js";
// ---------------------------------------------------------------------------------------------------

// @url - /customization/?foodCategory=""
// @method - PUT
// @desc - updateCustomization - controller to update or create the food customization
export const updateMeatToppingsCustomization = asyncErrorHandler(async (req, res, next) => {
   

    const { id } = req?.params;

      const isValidId = await meatToppingsCustomizationModel.findByIdAndUpdate(
        id,req?.body
      );

      if (!isValidId)
        return next(new CustomError("No data found with given id!!", 400));

    return res.status(200).json({
      success: true,
      message: `MeatToppings Customization Updated Successfully`,
    });
  }
);

export const createMeatToppingsCustomization = asyncErrorHandler( async(req,res,next)=>{
  
    const newFoodCustomization = new meatToppingsCustomizationModel({
...req?.body
  })

  await newFoodCustomization.save()
 res.status(201).json({status:true,message:"MeatToppings Customization created successfully"})
  }
)

export const getAllMeatToppingsCustomization = asyncErrorHandler( async(req,res,next)=>{

  
  const data = await meatToppingsCustomizationModel.find()

 
 res.status(200).json({status:true,message:"MeatToppings Customization data found successfully",data})
  }

)