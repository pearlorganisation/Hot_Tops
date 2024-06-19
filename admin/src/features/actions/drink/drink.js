import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";


export const createDrink = createAsyncThunk(
  "createDrink",
  async (data) => {
    const response = await instance.post(
      "/drinks",
      data
    );
    console.log(response.data, "res");
    return response;
  }
);

export const getDrink = createAsyncThunk("getDrink", async () => {
  const {data} = await instance.get(
    "/drinks"
  );
  console.log(data, "res");
  return data;
});
