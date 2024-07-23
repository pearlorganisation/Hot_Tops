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
  try {
    // Fetch related data and ensure .lean() is used
    const pizzaData = await pizza.find({}).lean();
    const dessertData = await dessert.find({}).lean();
    const dipsData = await dips.find({}).lean();
    const drinkData = await drinks.find({}).lean();

    // Fetch the deal and ensure .lean() is used
    const resultantData = await deals.findById(req.params.id).lean();

    if (!resultantData) {
      return next(new CustomError("Deal not found", 404));
    }

    let drinksToInclude = [];

    if (resultantData?.defaultDrinkType.toLowerCase() === "both") {
      drinksToInclude = drinkData;
    } else {
      const defaultDrinkType = resultantData?.defaultDrinkType.toLowerCase();
      drinksToInclude = drinkData
        .map((drink) => {
          const filteredPrices = drink.price.filter(
            (drinkPrice) =>
              drinkPrice.drinkType.toLowerCase() === defaultDrinkType
          );
          if (filteredPrices.length > 0) {
            return {
              ...drink,
              price: filteredPrices,
            };
          }
          return null;
        })
        .filter(Boolean);
    }

    // Construct the data object without Mongoose metadata
    const data = {
      ...resultantData,
      pizza: createRepeatedArray(
        resultantData.chooseItems.pizza || 0,
        pizzaData
      ),
      dessert: createRepeatedArray(
        resultantData.chooseItems.dessert || 0,
        dessertData
      ),
      dips: createRepeatedArray(resultantData.chooseItems.dips || 0, dipsData),
      drinks: createRepeatedArray(
        resultantData.chooseItems.drinks || 0,
        drinksToInclude
      ),
    };

    res.status(200).json({ status: true, data });
  } catch (error) {
    next(error);
  }
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
