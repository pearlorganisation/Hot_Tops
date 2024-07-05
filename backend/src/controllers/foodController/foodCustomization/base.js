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
      message: `Base Customization Updated Successfully`});
  }
);

export const createBaseCustomization = asyncErrorHandler( async(req,res,next)=>{
  const {price,name} = req?.body
  const priceWithName = price.map(item => ({
    ...item,
    name: name // Add the main name to the nested name field
  }));

    const data = new baseCustomizationModel({
...req?.body,
price:priceWithName
  })

  await data.save()
  

 res.status(201).json({status:true,message:"Base Customization created successfully"})
  }
)

export const getAllBaseCustomization = asyncErrorHandler( async(req,res,next)=>{

  const {id1,id2} = req?.query
const data = await baseCustomizationModel.findById(id1)

if (!data) {
  return next(new CustomError("No data found with given id!!", 400));
}

// Finding the size inside the price array with the given id2
const sizeData = data.price.find((item) => item.size.toString() === id2);

if (!sizeData) {
  return res.status(404).json({ status: false, message: "Size data not found" });
}
 res.status(200).json({status:true,message:"Base Customization data found successfully",data:sizeData})
  }

)

export const deleteBaseCustomization = asyncErrorHandler( async(req,res,next)=>{
       const {id}= req?.params

       
       const isValidId =await baseCustomizationModel.findByIdAndDelete(id)
       if(!isValidId){
         return next(new CustomError("No data found with given id!!", 400))
         }
 res.status(200).json( {status:true,message:"Base Customization data deleted successfully"})

  

  }

)