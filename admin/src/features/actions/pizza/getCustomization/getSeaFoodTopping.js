import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSeaFoodTopping = createAsyncThunk(
  "getSeaFoodTopping",
  async () => {
    const res = await fetch("https://hot-house.onrender.com/api/v1/food/customization/seafoodToppings");

    return res?.json();
  }
);