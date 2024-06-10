// ----------------------------------------------Imports----------------------------------------------
import { pizzaCustomizationModel } from "../../../models/foodModels/foodCustomization/pizzaCustomization/pizzaCustomizationModel.js";
import { asyncErrorHandler } from "../../../utils/errors/asyncErrorHandler.js";
import { pick } from "lodash-es";
import { CustomError } from "../../../utils/errors/customError.js";
// ---------------------------------------------------------------------------------------------------

// @url - /customization/?foodCategory=""
// @method - PUT
// @desc - upsertCustomization - controller to update or create the food customization
export const upsertFoodCustomization = asyncErrorHandler(async (req, res, next) => {
    console.log(req?.query, "queryyyyy");
    // const foodCategoryQuery = req.query?.foodCategory
    //   .toString()
    //   .toUpperCase()
    //   .replaceAll(" ", "");

    const { id } = req?.params;

    // const payload = req.body?.payload;

    // if (!payload) {
    //   return next(new CustomError("Payload is required", 400));
    // }


    // if (foodCategoryQuery === "PIZZA") {
      const isValidId = await pizzaCustomizationModel.findByIdAndUpdate(
        { _id: id },
        { ...req?.body },
        { upsert: true, new: true }
      );
      // }

      if (!isValidId)
        return next(new errorResponse("No data found with given id!!", 400));

    return res.status(200).json({
      success: true,
      message: ` Customization Updated Successfully`,
    });
  }
);

export const createFoodCustomization = asyncErrorHandler( async(req,res,next)=>{
  const { size,base,sauce,cheese,veggetarianToppings,meatToppings,seafoodToppings} = req?.body
  
  const newFoodCustomization = new pizzaCustomizationModel({
...req?.body
  })

  await newFoodCustomization.save()
 res.status(201).json({status:true,message:"Pizza Customization created successfully"})
  }
)

export const getAllFoodCustomization = asyncErrorHandler( async(req,res,next)=>{

  
  const data = await pizzaCustomizationModel.find()

 
 res.status(200).json({status:true,message:"Pizza Customization data found successfully",data})
  }

)