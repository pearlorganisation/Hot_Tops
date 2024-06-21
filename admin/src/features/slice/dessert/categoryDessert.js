import { createSlice } from "@reduxjs/toolkit";

import { createCategory, getCategory } from "../../actions/dessert/categoryDessert";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  isSuccess: false,
  categoryData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const categoryDessertSlice = createSlice({
  name: "categoryDessertSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createCategory.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.categoryData = action.payload.data;
        toast.success("Category Added Successfully...",{
          position:"top-center"
        });
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
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
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = categoryDessertSlice.actions;
export default categoryDessertSlice.reducer;
