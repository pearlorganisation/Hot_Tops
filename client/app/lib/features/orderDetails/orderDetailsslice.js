const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  order: null,
  customizationData: null,
  TOTAL_DEFAUTL_TOPPINGS: 0,
  MAX_TOPPINGS: 8,
};
const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {
    getorderDetails: (state, action) => {
      state.order = action.payload;
    },
    getCustomizationDetails: (state, action) => {
      const {
        sauceName,
        cheeseName,
        vegetarianToppingsName,
        meatToppingsName,
      } = action.payload;
      const flatArray = [
        sauceName,
        cheeseName,
        vegetarianToppingsName,
        meatToppingsName,
      ].flat();
      const MAX_TOPPINGS_BACKEND = flatArray.length;
      if (MAX_TOPPINGS_BACKEND > state.MAX_TOPPINGS) {
       
        state.MAX_TOPPINGS = flatArray.length;
      }
      state.customizationData = action.payload;
    },
  },
});

export const { getorderDetails, getCustomizationDetails } =
  orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
