import { createSlice } from "@reduxjs/toolkit";

import { cretaeCategory, getCategory } from "../../actions/sides/sidesAction";

const initialState = {
  isLoading: false,
  isSuccess: false,
  categoryData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const sidesSlice = createSlice({
  name: "sidesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(cretaeCategory.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(cretaeCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.categoryData = action.payload.data;
        // toast.success("Category Added Successfully...");
      })
      .addCase(cretaeCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        // toast.error(action?.payload || "Something went wrong");
      })

      .addCase(getCategory.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.categoryData = action.payload.data;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        // toast.error(action?.payload || "Something went wrong");
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = sidesSlice.actions;
export default sidesSlice.reducer;
