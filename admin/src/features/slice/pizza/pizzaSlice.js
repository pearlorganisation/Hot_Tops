import { createSlice } from "@reduxjs/toolkit";
import { createPizza } from "../../actions/pizza/createPizza";

const initialState = {
  isLoading: false,
  PizzaData: [],
  isError: false,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createPizza.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createPizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.PizzaData = action.payload;
    });
    builder.addCase(createPizza.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default pizzaSlice.reducer;
