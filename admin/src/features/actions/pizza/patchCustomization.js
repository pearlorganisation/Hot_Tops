import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";

export const updateBasePizza = createAsyncThunk(
  "updateBasePizza",
  async (data) => {
    console.log(data);
    const res = await instance.patch(
      `https://hot-house.onrender.com/api/v1/food/customization/base/${data._id}`,
      data
    );

    if (!res.ok) {
      throw new Error("Failed to post base pizza");
    }

    return res.json();
  }
);

export const updateCheesePizza = createAsyncThunk(
  "updateCheesePizza",
  async (data) => {
    const res = await instance.patch(
      `https://hot-house.onrender.com/api/v1/food/customization/cheese/${data?._id}`,
      data
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

export const updateMeatTopping = createAsyncThunk(
  "updateMeatTopping",
  async (data) => {
    const res = await instance.patch(
      `https://hot-house.onrender.com/api/v1/food/customization/meatToppings/${data?._id}`,
      data
    );

    if (!res.ok) {
      throw new Error("Failed to post base pizza");
    }

    return res.json();
  }
);

export const updateSaucePizza = createAsyncThunk(
  "updateSaucePizza",
  async (data) => {
    const res = await instance.patch(
      `https://hot-house.onrender.com/api/v1/food/customization/sauce/${data?._id}`,
      data
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

export const updateSizePizza = createAsyncThunk(
  "updateSizePizza",
  async (data) => {
    const res = await instance.patch(
      `https://hot-house.onrender.com/api/v1/food/customization/size/${data?._id}`,
      data
    );

    if (!res.ok) {
      throw new Error("Failed to post base pizza");
    }

    return res.json();
  }
);

export const updateVegTopping = createAsyncThunk(
  "updateVegTopping",
  async (data) => {
    const res = await instance.patch(
      `https://hot-house.onrender.com/api/v1/food/customization/vegetarianToppings/${data?._id}`,
      data
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
