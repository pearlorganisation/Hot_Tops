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

      const data = await vegetarianToppingsCustomizationModel.findByIdAndUpdate(
        id,{...req?.body},{new:true}
      );

      if (!data)
        return next(new CustomError("No data found with given id!!", 400));
    
      const updatedData = await vegetarianToppingsCustomizationModel.find();

    return res.status(200).json({
      success: true,
      message: `VegetarianToppings Customization Updated Successfully`,
      updatedData
    });
  }
);

export const createVegetarianToppingsCustomization = asyncErrorHandler( async(req,res,next)=>{
  
    const data = new vegetarianToppingsCustomizationModel({
...req?.body
  })

  await data.save()
  const updatedData = await vegetarianToppingsCustomizationModel.find();

 res.status(201).json({status:true,message:"VegetarianToppings Customization created successfully",updatedData})
  }
)

export const getAllVegetarianToppingsCustomization = asyncErrorHandler( async(req,res,next)=>{

  
  const data = await vegetarianToppingsCustomizationModel.find()

 
 res.status(200).json({status:true,message:"VegetarianToppings Customization data found successfully",data})
  }

)

export const deleteVegetarianToppingsCustomization = asyncErrorHandler( async(req,res,next)=>{
  const {id}= req?.params
      console.log(id)

const isValidId =await vegetarianToppingsCustomizationModel.findByIdAndDelete(id)
if(!isValidId){
return next(new CustomError("No data found with given id!!", 400))
}

const data = await vegetarianToppingsCustomizationModel.find();


res.status(200).json({status:true,message:"VegetarianToppings Customization data deleted successfully",data})
}

)