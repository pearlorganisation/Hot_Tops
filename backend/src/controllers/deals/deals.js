import deals from '../../models/deals/deals.js'; // Ensure the file extension is correct
import { asyncErrorHandler } from '../../utils/errors/asyncErrorHandler.js'; // Add the extension if missing

export const createDeal = asyncErrorHandler(async (req, res,next) => {


  const data = new deals({
      ...req?.body,
      sizes:JSON.parse(req.body.sizes),
    banner: req?.file?.path
  });
    await data.save();
    

  res.status(201).json({ status: true, message: "Created Deals successfully!!" ,data });

});

export const deleteDeal = asyncErrorHandler(async (req, res, next) => {
    

  const {id}= req?.params;
  
  const data = await deals.findByIdAndDelete(id)

  if(!data){
    return next ( new CustomError("This Id Doesn't exist",400) )
    }

  res.status(204).json({status:true,message:"Deal Deleted Successfully"})
});

export const updateDeal = asyncErrorHandler(async (req, res, next) => {
    
    // const { id } = req?.params;
    
    // const data = await deals.findByIdAndUpdate({
    //     ...req
    // })


    res.status(200).json({ status: true, message: "Under Development" });
});

export const getDeal = asyncErrorHandler(async (req, res, next) => {
    
  // deals.aggregate([

  // ])

  const data = await deals.findById(req.params.id);
    res.status(200).json({ status: true, data });
});

export const getAllDeals = asyncErrorHandler(async (req, res, next) => {
  console.log(req.query);
  let { isPopular } = req.query;

  console.log(isPopular);

  let query = {};
  if (isPopular === 'true') {
    query.isPopular = true;

    
  } 

  // Fetch data based on query
  const data = await deals.find(query);
  res.status(200).json({ status: true, data, result: data.length });
});

