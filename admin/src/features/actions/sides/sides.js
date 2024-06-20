import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";


export const createSides = createAsyncThunk(
  "createSides",
  async (data) => {
    const response = await instance.post(
      "/sides",
      data
    );
    console.log(response.data, "res");
    return response;
  }
);

export const getSides = createAsyncThunk("getSides", async () => {
  const {data} = await instance.get(
    "/sides"
  );
  console.log(data, "res");
  return data;
});
