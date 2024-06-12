import { configureStore } from "@reduxjs/toolkit";
import selectedStoreReducer from "./features/selectedStore/selectedStoreSlice";
import cartReducer from "./features/cartSlice/cartSlice.js";
import pizzaReducer from "./features/slices/pizzaSlice/pizzeSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      selectedStore: selectedStoreReducer,
      cart: cartReducer,
      pizza: pizzaReducer,
    },
  });
};
