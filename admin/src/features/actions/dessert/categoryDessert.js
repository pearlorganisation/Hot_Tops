import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";


export const createCategory = createAsyncThunk(
  "createDessertCategory",
  async (data) => {
    const response = await instance.post(
      "/dessert/category",
      data
    );
    console.log(response, "res");
    return response;
  }
);

export const getCategory = createAsyncThunk("getDessertCategory", async () => {
  const {data} = await instance.get(
    "/dessert/category"
  );
  console.log(data, "res");
  return data;
});
