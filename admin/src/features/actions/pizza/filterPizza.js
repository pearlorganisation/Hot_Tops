import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";


export const createFilter = createAsyncThunk(
  "createPizzaFilter",
  async (data) => {
    const response = await instance.post(
      "/pizza/filter",
      data
    );
    console.log(response.data, "res");
    return response;
  }
);

export const getFilter = createAsyncThunk("getPizzaFilter", async () => {
  const {data} = await instance.get(
    "/pizza/filter"
  );
  console.log(data, "res");
  return data;
});
