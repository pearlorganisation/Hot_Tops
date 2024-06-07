import { configureStore } from "@reduxjs/toolkit";
import selectedStoreReducer from "./features/selectedStore/selectedStoreSlice";
import cartReducer from "./features/cartSlice/cartSlice.js";

export const makeStore = () => {
  return configureStore({
    reducer: {
      selectedStore: selectedStoreReducer,
      cart: cartReducer,
    },
  });
};
