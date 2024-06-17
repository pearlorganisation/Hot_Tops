// ----------------------------------------------Imports----------------------------------------------
import { sauceCustomizationModel } from "../../../models/foodModels/foodCustomization/pizzaCustomization/sauce.js";
import { asyncErrorHandler } from "../../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../../utils/errors/customError.js";
// ---------------------------------------------------------------------------------------------------

// @url - /customization/?foodCategory=""
// @method - PUT
// @desc - updateCustomization - controller to update or create the food customization
export const updateSauceCustomization = asyncErrorHandler(async (req, res, next) => {
   

    const { id } = req?.params;

      const data = await sauceCustomizationModel.findByIdAndUpdate(
        id,{...req?.body},{new:true}
      );

      if (!data)
        return next(new CustomError("No data found with given id!!", 400));
    
      const updatedData = await sauceCustomizationModel.find();

    return res.status(200).json({
      success: true,
      message: `Sauce Customization Updated Successfully`,
      updatedData
    });
  }
);

export const createSauceCustomization = asyncErrorHandler( async(req,res,next)=>{
  
    const data = new sauceCustomizationModel({
...req?.body
  })

  await data.save()
  const updatedData = await sauceCustomizationModel.find();

 res.status(201).json({status:true,message:"Sauce Customization created successfully",updatedData})
  }
)

export const getAllSauceCustomization = asyncErrorHandler( async(req,res,next)=>{

  
  const data = await sauceCustomizationModel.find()

 
 res.status(200).json({status:true,message:"Sauce Customization data found successfully",data})
  }

)


export const deleteSauceCustomization = asyncErrorHandler( async(req,res,next)=>{
       const {id}= req?.params
           console.log(id)
  
 const isValidId =await sauceCustomizationModel.findByIdAndDelete(id)
 if(!isValidId){
  return next(new CustomError("No data found with given id!!", 400))
 }
 const data = await sauceCustomizationModel.find();

 
 res.status(200).json({status:true,message:"Sauce Customization data deleted successfully",data})
  }

)