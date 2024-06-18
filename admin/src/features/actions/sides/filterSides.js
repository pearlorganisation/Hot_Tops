import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";


export const createFilter = createAsyncThunk(
  "createFilter",
  async (data) => {
    const response = await instance.post(
      "/sides/filter",
      data
    );
    console.log(response.data, "res");
    return response;
  }
);

export const getFilter = createAsyncThunk("getFilter", async () => {
  const {data} = await instance.get(
    "/sides/filter"
  );
  console.log(data, "res");
  return data;
});
