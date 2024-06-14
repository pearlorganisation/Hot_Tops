import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPizzaCustomization = createAsyncThunk(
  "getPizzaCustomization",
  async () => {
    const res = await fetch("https://hot-house.onrender.com/api/v1/food/customization");

    return res?.json();
  }
);