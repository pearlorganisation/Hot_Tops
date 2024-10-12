import banner from "../models/banner.js";
import { asyncErrorHandler } from "../utils/errors/asyncErrorHandler.js";
import { CustomError } from "../utils/errors/customError.js";

export const newbanner = asyncErrorHandler(async (req, res, next) => {
  const { deal } = req?.body;
  
  await banner.create({
    banner: req?.file?.path,
    deal
  });
  res
    .status(201)
    .json({ status: true, message: "New Banner created successfully!!" });
});

export const updateBanner = asyncErrorHandler(async(req,res,next)=>{
  const {id}= req?.params;
  const { deal } = req?.body;
const existingData = await banner.find();

  const data = await banner.findByIdAndUpdate(id,{
      banner: req?.file?.path || existingData?.banner,
      deal

  })
  if(!data){
return next ( new CustomError("This Id Doesn't exist",400) )
  }

  res.status(200).json({status:true,message:"Banner Updated Successfully"})
})

export const deleteBanner = asyncErrorHandler(async(req,res,next)=>{
  const {id}= req?.params;
  
  const data = await banner.findByIdAndDelete(id)

  if(!data){
    return next ( new CustomError("This Id Doesn't exist",400) )
    }

  res.status(200).json({status:true,message:"Banner Deleted Successfully"})
})


export const getAllBanners = asyncErrorHandler(async (req, res, next) => {
  const data = await banner.find().populate("deal");
  res.status(200).json({ status: true, data });
});
