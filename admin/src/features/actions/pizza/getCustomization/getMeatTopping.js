import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMeatTopping = createAsyncThunk(
  "getMeatTopping",
  async () => {
    const res = await fetch("https://hot-house.onrender.com/api/v1/food/customization/meatToppings");

    return res?.json();
  }
);