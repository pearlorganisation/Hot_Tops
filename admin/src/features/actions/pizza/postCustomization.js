import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";

export const postBasePizza = createAsyncThunk("postBasePizza", async (data) => {
  const res = await instance.post(
    "food/customization/base",

    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to post base pizza");
  }

  return res.json();
});

export const postCheesePizza = createAsyncThunk(
  "postCheesePizza",
  async (data) => {
    const res = await instance(
      "food/customization/cheese",

      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      } 
    );

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

export const postMeatTopping = createAsyncThunk(
  "postMeatTopping",
  async (data) => {
    const res = await instance(
      "food/customization/meatToppings",

      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to post base pizza");
    }

    return res.json();
  }
);

export const postSaucePizza = createAsyncThunk(
  "postSaucePizza",
  async (data) => {
    const res = await instance(
      "food/customization/sauce",

      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      } 
    );

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

export const postSizePizza = createAsyncThunk("postSizePizza", async (data) => {
  const res = await instance(
    "food/customization/size",

    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to post base pizza");
  }

  return res.json();
});

export const postVegTopping = createAsyncThunk(
  "postVegTopping",
  async (data) => {
    const res = await instance(
      "food/customization/vegetarianToppings",

      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      } 
    );

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
