import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";


export const createDessert = createAsyncThunk(
  "createDessert",
  async (data) => {
    const response = await instance.post(
      "/dessert",
      data
    );
    console.log(response.data, "res");
    return response;
  }
);

export const getDessert = createAsyncThunk("getDessert", async () => {
  const {data} = await instance.get(
    "/dessert"
  );
  console.log(data, "res");
  return data;
});
