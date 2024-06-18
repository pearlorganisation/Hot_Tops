import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./slice/pizza/pizzaSlice";
import categoryReducer from "./slice/sides/sidesSlice";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    category: categoryReducer,
  },
});
