import { createSlice } from "@reduxjs/toolkit";
import { createPizza, getPizza } from "../../actions/pizza/pizza";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  isSuccess: false,
  pizzaData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createPizza.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(createPizza.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.pizzaData = action.payload.data;
        console.log(state.pizzaData)
        toast.success("Pizza Added Successfully...",{
          position:"top-center"
        });
      })
      .addCase(createPizza.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })

      .addCase(getPizza.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getPizza.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.pizzaData = action.payload.data;
      })
      .addCase(getPizza.rejected, (state, action) => {
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
export const {} = pizzaSlice.actions;
export default pizzaSlice.reducer;
