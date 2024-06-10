import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPizzasFilter = createAsyncThunk("getPizzasFilter", async () => {
  const res = await fetch("http://localhost:9898/api/v1/pizza/filter");
  return res.json();
});
