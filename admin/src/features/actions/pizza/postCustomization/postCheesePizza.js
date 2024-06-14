import { createAsyncThunk } from "@reduxjs/toolkit";

export const postCheesePizza = createAsyncThunk(
    "postCheesePizza",
    async (data) => {
      const res = await fetch("https://hot-house.onrender.com/api/v1/food/customization/cheese", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Include the data in the request body
      });
  
      if (!res.ok) {
        // Handle different types of errors more explicitly
        if (res.status === 404) {
          throw new Error("Not found");
        } else if (res.status === 500) {
          throw new Error("Internal server error");
        } else {
          throw new Error("Failed to update pizza customization");
        }
      }
  
      return res.json();
    }
  );
  