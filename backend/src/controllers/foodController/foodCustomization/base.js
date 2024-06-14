// ----------------------------------------------Imports----------------------------------------------
import { baseCustomizationModel } from "../../../models/foodModels/foodCustomization/pizzaCustomization/base.js";
import { asyncErrorHandler } from "../../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../../utils/errors/customError.js";
// ---------------------------------------------------------------------------------------------------

// @url - /customization/?foodCategory=""
// @method - PUT
// @desc - updateCustomization - controller to update or create the food customization
export const updateBaseCustomization = asyncErrorHandler(async (req, res, next) => {
   

    const { id } = req?.params;

      const data = await baseCustomizationModel.findByIdAndUpdate(
        id,{...req?.body},{new:true}
      );

      if (!data)
        return next(new CustomError("No data found with given id!!", 400));

    return res.status(200).json({
      success: true,
      message: `Base Customization Updated Successfully`,
      data
    });
  }
);

export const createBaseCustomization = asyncErrorHandler( async(req,res,next)=>{
  
    const newFoodCustomization = new baseCustomizationModel({
...req?.body
  })

  await newFoodCustomization.save()
 res.status(201).json({status:true,message:"Base Customization created successfully"})
  }
)

export const getAllBaseCustomization = asyncErrorHandler( async(req,res,next)=>{

  
  const data = await baseCustomizationModel.find()

 
 res.status(200).json({status:true,message:"Base Customization data found successfully",data})
  }

)

export const deleteBaseCustomization = asyncErrorHandler( async(req,res,next)=>{
       const {id}= req?.params
           console.log(id)
  
 const isValidId =await baseCustomizationModel.findByIdAndDelete(id)
 if(!isValidId){
  return next(new CustomError("No data found with given id!!", 400))
 }
 
 res.status(200).json({status:true,message:"Base Customization data deleted successfully"})
  }

)