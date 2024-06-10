import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPizza = createAsyncThunk("createPizza", async () => {
  const res = await fetch("http://localhost:9898/api/v1/pizza");
  return res?.json();
});
