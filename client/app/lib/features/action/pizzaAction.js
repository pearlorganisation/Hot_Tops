import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const pizzaAction = createAsyncThunk(
  "get/pizza",

  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:9898/api/v1/pizza");
      console.log("data::", data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
