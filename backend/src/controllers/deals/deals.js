import deals from "../../models/deals/deals.js"; // Ensure the file extension is correct
import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js"; // Add the extension if missing
import pizza from "../../models/pizza/pizza.js";
import dips from "../../models/dips.js";
import dessert from "../../models/dessert/dessert.js";
import drinks from "../../models/drinks.js";

// Helper function to create an array with repeated data
function createRepeatedArray(quantity, data) {
  const resultArray = [];
  while (quantity > 0) {
    resultArray.push(...data);
    quantity--;
  }
  return resultArray;
}

export const createDeal = asyncErrorHandler(async (req, res, next) => {
  const data = new deals({
    ...req?.body,
    sizes: JSON.parse(req.body.sizes),
    banner: req?.file?.path,
    chooseItems: {
      pizza: JSON.parse(req.body.chooseItems)?.pizza || 0,
      dips: JSON.parse(req.body.chooseItems)?.dips || 0,
      drinks: JSON.parse(req.body.chooseItems)?.drinks || 0,
      dessert: JSON.parse(req.body.chooseItems)?.dessert || 0,
    },
  });
  await data.save();

  res
    .status(201)
    .json({ status: true, message: "Created Deals successfully!!", data });
});

export const deleteDeal = asyncErrorHandler(async (req, res, next) => {
  const { id } = req?.params;

  const data = await deals.findByIdAndDelete(id);

  if (!data) {
    return next(new CustomError("This Id Doesn't exist", 400));
  }

  res.status(204).json({ status: true, message: "Deal Deleted Successfully" });
});

export const updateDeal = asyncErrorHandler(async (req, res, next) => {
  // const { id } = req?.params;

  // const data = await deals.findByIdAndUpdate({
  //     ...req
  // })

  res.status(200).json({ status: true, message: "Under Development" });
});

export const getDeal = asyncErrorHandler(async (req, res, next) => {
  const pizzaData = await pizza.find({});
  const dessertData = await dessert.find({});
  const dipsData = await dips.find({});
  const drinkData = await drinks.find({});

  const resultantData = await deals.findById(req.params.id);

  const data = {
    ...resultantData?._doc,
    pizza: createRepeatedArray(
      resultantData?._doc.chooseItems?.pizza || 0,
      pizzaData
    ),
    dessert: createRepeatedArray(
      resultantData?._doc.chooseItems?.dessert || 0,
      dessertData
    ),
    dips: createRepeatedArray(
      resultantData?._doc.chooseItems?.dips || 0,
      dipsData
    ),
    drinks: createRepeatedArray(
      resultantData?._doc.chooseItems?.drinks || 0,
      drinkData
    ),
  };

  console.log("shashank here ");

  res.status(200).json({ status: true, data });
});

export const getAllDeals = asyncErrorHandler(async (req, res, next) => {
  let { isPopular } = req.query;

  // // Fetch data based on query
  let query = {};
  if (isPopular === "true") {
    query.isPopular = true;
  }

  let data = await deals.find(query);
  console.log(data?.chooseItems, "SHASHANK");

  res.status(200).json({ status: true, data, result: data.length });
});
