// -----------------------------------------------Imports-------------------------------------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectMongo } from "./src/configs/db/mongo/mongoConfig.js";
import { corsConfig, envAccess } from "./src/utils/index.js";
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

// Router Imports

// Route Middlewares

app.all(["/", "/api", "/api/v1"], (req, res, next) => {
  return res.status(200).json({
    message: "Welcome to Hot House",
  });
});

// -------------------------------------------------------------------------------------------------------------

// ------------------------------------------Global Error Handling----------------------------------------------
app.all("*", (req, res, next) => {});

app.use((error, req, res, next) => {});

// ------------------------------------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server is running at port - ${PORT}`);
});
// ------------------------------------------------------------------------------------------------------------
