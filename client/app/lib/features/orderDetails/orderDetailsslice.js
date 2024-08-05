const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  order: null,
  customizationData: null,
};
const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {
    getorderDetails: (state, action) => {
      state.order = action.payload;
    },
    getCustomizationDetails: (state, action) => {
      state.customizationData = action.payload;
    },
  },
});

export const { getorderDetails, getCustomizationDetails } =
  orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
