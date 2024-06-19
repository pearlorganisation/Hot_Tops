import { createSlice } from "@reduxjs/toolkit";
import { createDip, getDip } from "../../actions/dip/dip";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  isSuccess: false,
  dipData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const dipSlice = createSlice({
  name: "dipSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createDip.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(createDip.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.dipData = action.payload.data;
        console.log(state.dipData)
        toast.success("Dip Added Successfully...",{
          position:"top-center"
        });
      })
      .addCase(createDip.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })

      .addCase(getDip.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getDip.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.dipData = action.payload.data;
      })
      .addCase(getDip.rejected, (state, action) => {
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
export const {} = dipSlice.actions;
export default dipSlice.reducer;
