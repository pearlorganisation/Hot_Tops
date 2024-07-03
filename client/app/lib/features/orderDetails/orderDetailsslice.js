const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  order: null,
};
const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {
    getorderDetails: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { getorderDetails } = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
