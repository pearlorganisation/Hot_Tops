import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPizzasCategories = createAsyncThunk(
  "getPizzasCategories",
  async () => {
    const res = await fetch("http://localhost:9898/api/v1/pizza/category");

    return res.json();
  }
);
