import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBasePizza = createAsyncThunk(
  "getBasePizza",
  async () => {
    const res = await fetch("https://hot-house.onrender.com/api/v1/food/customization/base");

    return res?.json();
  }
);