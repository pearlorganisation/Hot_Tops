import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";


export const createCategory = createAsyncThunk(
  "createPizzaCategory",
  async (data) => {
    const response = await instance.post(
      "/pizza/category",
      data
    );
    console.log(response, "res");
    return response;
  }
);

export const getCategory = createAsyncThunk("getPizzaCategory", async () => {
  const {data} = await instance.get(
    "/pizza/category"
  );
  console.log(data, "res");
  return data;
});
