import { createAsyncThunk } from "@reduxjs/toolkit";

export const postSizePizza = createAsyncThunk(
  "postSizePizza",
  async (data) => {
    const res = await fetch("https://hot-house.onrender.com/api/v1/food/customization/size", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error("Failed to post base pizza");
    }

    return res.json();
  }
);
