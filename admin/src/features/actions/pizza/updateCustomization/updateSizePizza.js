import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateSizePizza = createAsyncThunk(
  "updateSizePizza",
  async (data) => {
    const res = await fetch(`https://hot-house.onrender.com/api/v1/food/customization/size/${data}`, {
      method: "PATCH",
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
