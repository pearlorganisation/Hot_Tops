import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSaucePizza = createAsyncThunk(
  "getSaucePizza",
  async () => {
    const res = await fetch("https://hot-house.onrender.com/api/v1/food/customization/sauce");

    return res?.json();
  }
);