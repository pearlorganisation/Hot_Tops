const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
    isOrderCheckout: false,
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
    orderCheckedout: (state, action) => {
      state.isOrderCheckout = action.payload;
    },
    emptyCart: (state, action) => {
      state.cartData = [];
    },
  },
});

export const {
  addToCart,
  deletefromCart,
  orderCheckedout,
  emptyCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
