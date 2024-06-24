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
    deletefromCart: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, deletefromCart } = cartSlice.actions;
export default cartSlice.reducer;
