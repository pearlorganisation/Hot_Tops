import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";


export const createPizza = createAsyncThunk(
  "createPizza",
  async (data) => {
    const response = await instance.post(
      "/pizza",
      data
    );
    console.log(response.data, "res");
    return response;
  }
);

export const getPizza = createAsyncThunk("getPizza", async () => {
  const {data} = await instance.get(
    "/pizza"
  );
  console.log(data, "res");
  return data;
});
