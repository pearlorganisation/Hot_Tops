import { toast } from "react-toastify";



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
    increaseItem: (state, action) => {
      const temp = current(state.cartData)?.map((item) => {
        if (item?._id === action.payload?.id) {
          const updatedData = { ...item, items: item.items + 1 };
          return {
            ...updatedData,
            totalSum: updatedData?.items * updatedData?.totalPrice,
          };
        }
        return item;
      });
      state.cartData = temp;

      console.log("temp", temp);
    },
    decreaseItem: (state, action) => {
      const temp = current(state.cartData)?.map((item) => {
        if (item?._id === action.payload?.id) {
          const updatedData = {
            ...item,
            items: item.items > 1 ? item.items - 1 : item.items,
          };
          return {
            ...updatedData,
            totalSum: updatedData?.items * updatedData?.totalPrice,
          };
        }
        return item;
      });
      state.cartData = temp;
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

export const { addToCart, deletefromCart, orderCheckedout, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
