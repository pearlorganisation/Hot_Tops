import { createAsyncThunk } from "@reduxjs/toolkit";

export const getVegetarianTopping = createAsyncThunk(
  "getVegetarianTopping",
  async () => {
    const res = await fetch("https://hot-house.onrender.com/api/v1/food/customization/vegetarianToppings");

    return res?.json();
  }
);