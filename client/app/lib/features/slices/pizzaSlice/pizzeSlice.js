import { createSlice } from "@reduxjs/toolkit";
import { pizzaAction } from "../../action/pizzaAction";

const initialState = {
  isLoading: false,
  errorMessage: "",
  pizzadata: [],
};

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      //  user signUp
      .addCase(pizzaAction.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(pizzaAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.pizzadata = action.payload;
      })
      .addCase(pizzaAction.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});
export const {} = pizzaSlice.actions;
export default pizzaSlice.reducer;
