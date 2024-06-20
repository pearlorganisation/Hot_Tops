import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";


export const createFilter = createAsyncThunk(
  "createDesertFilter",
  async (data) => {
    const response = await instance.post(
      "/dessert/filter",
      data
    );
    console.log(response.data, "res");
    return response;
  }
);

export const getFilter = createAsyncThunk("getDesertFilter", async () => {
  const {data} = await instance.get(
    "/dessert/filter"
  );
  console.log(data, "res");
  return data;
});
