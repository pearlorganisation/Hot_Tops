const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartData = [...state.cartData, action.payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
