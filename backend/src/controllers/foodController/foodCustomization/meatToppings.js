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

      const data = await meatToppingsCustomizationModel.findByIdAndUpdate(
        id,{...req?.body},{new:true}
      );

      if (!data)
        return next(new CustomError("No data found with given id!!", 400));


      const updatedData = await meatToppingsCustomizationModel.find();

    return res.status(200).json({
      success: true,
      message: `MeatToppings Customization Updated Successfully`,
      updatedData
    });
  }
);

export const createMeatToppingsCustomization = asyncErrorHandler( async(req,res,next)=>{
  
    const data = new meatToppingsCustomizationModel({
...req?.body
  })

  await data.save()
  const updatedData = await meatToppingsCustomizationModel.find();
 
 res.status(201).json({status:true,message:"MeatToppings Customization created successfully",updatedData})
  }
)

export const getAllMeatToppingsCustomization = asyncErrorHandler( async(req,res,next)=>{

  
  const data = await meatToppingsCustomizationModel.find()

 
 res.status(200).json({status:true,message:"MeatToppings Customization data found successfully",data})
  }

)

export const deleteMeatToppingsCustomization = asyncErrorHandler( async(req,res,next)=>{
  const {id}= req?.params
      console.log(id)

const isValidId =await meatToppingsCustomizationModel.findByIdAndDelete(id)
if(!isValidId){
return next(new CustomError("No data found with given id!!", 400))
}
const data = await meatToppingsCustomizationModel.find();


res.status(200).json({status:true,message:"MeatToppings Customization data deleted successfully",data})
}

)