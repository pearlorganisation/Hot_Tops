// ----------------------------------------------Imports----------------------------------------------
import { seafoodToppingsCustomizationModel } from "../../../models/foodModels/foodCustomization/pizzaCustomization/seafoodToppings.js";
import { asyncErrorHandler } from "../../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../../utils/errors/customError.js";
// ---------------------------------------------------------------------------------------------------

// @url - /customization/?foodCategory=""
// @method - PUT
// @desc - updateCustomization - controller to update or create the food customization
export const updateSeafoodToppingsCustomization = asyncErrorHandler(async (req, res, next) => {
   

    const { id } = req?.params;

      const isValidId = await seafoodToppingsCustomizationModel.findByIdAndUpdate(
        id,req?.body
      );

      if (!isValidId)
        return next(new CustomError("No data found with given id!!", 400));

    return res.status(200).json({
      success: true,
      message: `SeafoodToppings Customization Updated Successfully`,
    });
  }
);

export const createSeafoodToppingsCustomization = asyncErrorHandler( async(req,res,next)=>{
  
    const newFoodCustomization = new seafoodToppingsCustomizationModel({
...req?.body
  })

  await newFoodCustomization.save()
 res.status(201).json({status:true,message:"SeafoodToppings Customization created successfully"})
  }
)

export const getAllSeafoodToppingsCustomization = asyncErrorHandler( async(req,res,next)=>{

  
  const data = await seafoodToppingsCustomizationModel.find()

 
 res.status(200).json({status:true,message:"SeafoodToppings Customization data found successfully",data})
  }

)

export const deleteSeafoodToppingsCustomization = asyncErrorHandler( async(req,res,next)=>{
  const {id}= req?.params
      console.log(id)

const isValidId =await seafoodToppingsCustomizationModel.findByIdAndDelete(id)
if(!isValidId){
return next(new CustomError("No data found with given id!!", 400))
}

res.status(200).json({status:true,message:"SeafoodToppings Customization data deleted successfully"})
}

)