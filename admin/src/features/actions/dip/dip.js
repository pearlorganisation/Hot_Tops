import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";


export const createDip = createAsyncThunk(
  "createDip",
  async (data) => {
    const response = await instance.post(
      "/dips",
      data
    );
    console.log(response.data, "res");
    return response;
  }
);

export const getDip = createAsyncThunk("getDip", async () => {
  const {data} = await instance.get(
    "/dips"
  );
  console.log(data, "res");
  return data;
});
