import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const cretaeCategory = createAsyncThunk(
  "createCategory",
  async (data) => {
    const response = await axios.post(
      "https://hot-house.onrender.com/api/v1/sides/category",
      data
    );
    console.log(response, "res");
    return response?.data;
  }
);

export const getCategory = createAsyncThunk("getCategory", async (data) => {
  const response = await axios.get(
    "https://hot-house.onrender.com/api/v1/sides/category"
  );
  console.log(response, "res");
  return response?.data;
});
