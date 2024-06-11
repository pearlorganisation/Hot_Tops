import { createSlice } from "@reduxjs/toolkit";
import { createPizza } from "../../actions/pizza/createPizza";
import { getPizzasFilter } from "../../actions/pizza/getPizzasFilter";
import { getPizzasCategories } from "../../actions/pizza/getPizzasCategories";

const initialState = {
  isLoading: false,
  PizzaData: [],
  isError: false,
  pizzaFilter: [],
  pizzaCategory: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  extraReducers: (builder) => {
    // create pizza api action and state
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

    // pizza filter api action and state
    builder.addCase(getPizzasFilter.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getPizzasFilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizzaFilter = action?.payload;
    });
    builder.addCase(getPizzasFilter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    //category api action and state
    builder.addCase(getPizzasCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getPizzasCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizzaCategory = action.payload;
    });
    builder.addCase(getPizzasCategories.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default pizzaSlice.reducer;
