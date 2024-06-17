import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSizePizza = createAsyncThunk(
  "getSizePizza",
  async () => {
    const res = await fetch("https://hot-house.onrender.com/api/v1/food/customization/size");

    return res?.json();
  }
);