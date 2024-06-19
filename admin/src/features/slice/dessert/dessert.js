import { createSlice } from "@reduxjs/toolkit";
import { createDessert, getDessert } from "../../actions/dessert/dessert";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  isSuccess: false,
  dessertData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const dessertSlice = createSlice({
  name: "dessertSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createDessert.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(createDessert.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.dessertData = action.payload.data;
        console.log(state.dessertData)
        toast.success("Dessert Added Successfully...",{
          position:"top-center"
        });
      })
      .addCase(createDessert.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })

      .addCase(getDessert.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getDessert.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.dessertData = action.payload.data;
      })
      .addCase(getDessert.rejected, (state, action) => {
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
export const {} = dessertSlice.actions;
export default dessertSlice.reducer;
