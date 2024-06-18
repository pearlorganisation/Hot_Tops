import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const createPizza = createAsyncThunk("createPizza", async (data) => {
  try {
    const res = await fetch("http://localhost:9898/api/v1/pizza", {
      method: "POST",
      body: data,
    });
    toast("pizza created successfully");
    return res?.json();
  } catch (error) {
    console.log(error?.message || error);
  }
});
