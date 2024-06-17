// ----------------------------------------------Imports----------------------------------------------
import { cheeseCustomizationModel } from "../../../models/foodModels/foodCustomization/pizzaCustomization/cheese.js";
import { asyncErrorHandler } from "../../../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../../../utils/errors/customError.js";
// ---------------------------------------------------------------------------------------------------

// @url - /customization/?foodCategory=""
// @method - PUT
// @desc - updateCustomization - controller to update or create the food customization
export const updateCheeseCustomization = asyncErrorHandler(async (req, res, next) => {
   

    const { id } = req?.params;

      const data = await cheeseCustomizationModel.findByIdAndUpdate(
        id,{...req?.body},{new:true}
      );

      if (!data)
        return next(new CustomError("No data found with given id!!", 400));

      const updatedData = await cheeseCustomizationModel.find();


    return res.status(200).json({
      success: true,
      message: `Cheese Customization Updated Successfully`,
      updatedData
    });
  }
);

export const createCheeseCustomization = asyncErrorHandler( async(req,res,next)=>{
  
    const data = new cheeseCustomizationModel({
...req?.body
  })

  await data.save()
  const updatedData = await cheeseCustomizationModel.find();

 res.status(201).json({status:true,message:"Cheese Customization created successfully",updatedData})
  }
)

export const getAllCheeseCustomization = asyncErrorHandler( async(req,res,next)=>{

  
  const data = await cheeseCustomizationModel.find()

 
 res.status(200).json({status:true,message:"Cheese Customization data found successfully",data})
  }

)

export const deleteCheeseCustomization = asyncErrorHandler( async(req,res,next)=>{
  const {id}= req?.params
      console.log(id)

const isValidId =await cheeseCustomizationModel.findByIdAndDelete(id)
if(!isValidId){
return next(new CustomError("No data found with given id!!", 400))
}

const data = await cheeseCustomizationModel.find();


res.status(200).json({status:true,message:"Cheese Customization data deleted successfully",data})
}

)