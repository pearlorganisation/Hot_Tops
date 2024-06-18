import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";


export const cretaeCategory = createAsyncThunk(
  "createCategory",
  async (data) => {
    const response = await instance.post(
      "/sides/category",
      data
    );
    console.log(response, "res");
    return response;
  }
);

export const getCategory = createAsyncThunk("getCategory", async () => {
  const {data} = await instance.get(
    "/sides/category"
  );
  console.log(data, "res");
  return data;
});
