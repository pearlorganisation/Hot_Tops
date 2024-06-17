import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteSaucePizza = createAsyncThunk(
  "deleteSaucePizza",
  async (data) => {
    const res = await fetch(`https://hot-house.onrender.com/api/v1/food/customization/sauce/${data}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to post base pizza");
    }

    return res.json();
  }
);
