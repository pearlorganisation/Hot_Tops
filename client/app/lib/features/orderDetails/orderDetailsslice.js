const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  order: null,
  customizationData: null,
  defaultPrice: 0,
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
    setDefaultPrice: (state, action) => {
      console.log(action.payload, "action.payload");

      // Filter the items based on the sauce names and calculate the default price
      const {
        sauceName,
        cheeseName,
        vegetarianToppingsName,
        meatToppingsName,
      } = state.customizationData;
      const temp = [
        sauceName,
        cheeseName,
        vegetarianToppingsName,
        meatToppingsName,
      ].flat();
      const defaultPrice = action.payload
        .filter((item) => temp.includes(item.name))
        .reduce((acc, nxt) => {
          return acc + (nxt.price[0]?.singlePrice || 0); // Ensure singlePrice exists
        }, 0);

      console.log(defaultPrice, "defaultPrice");

      // Update the state with the calculated default price
      state.defaultPrice = defaultPrice.toFixed(2);
    },
  },
});

export const { getorderDetails, getCustomizationDetails, setDefaultPrice } =
  orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
