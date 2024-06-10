import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./slice/pizza/pizzaSlice";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});
