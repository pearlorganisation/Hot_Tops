// -----------------------------------------------Imports-------------------------------------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectMongo } from "./src/configs/db/mongo/mongoConfig.js";
import { corsConfig, envAccess } from "./src/utils/index.js";
import { CustomError } from "./src/utils/errors/customError.js";
// -------------------------------------------------------------------------------------------------------------
dotenv.config();

const app = express();
const PORT = envAccess("PORT") || 9898;
connectMongo();
// ------------------------------------------------------------------------------------------------------------
// ----------------------------------------------CORS HANDLING-------------------------------------------------
app.use(cors(corsConfig()));
// ------------------------------------------------------------------------------------------------------------
// ----------------------------------------------Middlewares----------------------------------------------------
// express.json() -- middleware to parse the json coming from the http request
app.use(express.json());

// cookieParser() -- middleware to parse the cookie coming from the http request
app.use(cookieParser());
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------Routes----------------------------------------------------

const versionOne = (url) => {
  return `/api/v1/${url}`;
};
const foodCustomization = (url) => {
  return `/api/v1/food/customization/${url}`;
};

// Router Imports
import { foodCustomizationRouter } from "./src/routes/foodRoutes/foodCustomization/foodCustomizationRoutes.js";
import { foodItemRouter } from "./src/routes/foodRoutes/foodItemRoutes.js";
import pizzaRoutes from "./src/routes/pizza/pizza.js"
import pizza from "./src/models/pizza/pizza.js";
import { baseCustomizationRouter } from "./src/routes/foodRoutes/foodCustomization/base.js";
// Route Middlewares

app.all(["/", "/api", "/api/v1"], (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to Hot House",
  });
});

app.use(versionOne("food"), foodItemRouter); // Food Item Router
app.use(versionOne("food/customization"), foodCustomizationRouter);
 // Food Customization Router
app.use(foodCustomization("base"), baseCustomizationRouter);

// Pizza Router
app.use("/api/v1/pizza",pizzaRoutes)

// -------------------------------------------------------------------------------------------------------------

// ------------------------------------------Global Error Handling----------------------------------------------
app.all("*", (req, res, next) => {
  return next(
    new CustomError(`Can't find the ${req.originalUrl} on the server`, 404)
  );
});

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    message: error.message,
  });
});

// ------------------------------------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server is running at port - ${PORT}`);
});
// ------------------------------------------------------------------------------------------------------------
