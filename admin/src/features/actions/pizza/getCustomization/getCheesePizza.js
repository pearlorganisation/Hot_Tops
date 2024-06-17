import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCheesePizza = createAsyncThunk(
  "getCheesePizza",
  async () => {
    const res = await fetch("https://hot-house.onrender.com/api/v1/food/customization/cheese");

    return res?.json();
  }
);