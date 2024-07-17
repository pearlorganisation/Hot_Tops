import { toast } from "sonner";

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
    isOrderCheckout: false,
  },

  reducers: {
    addToCart: (state, action) => {
      const isExist = state.cartData?.some((item) => {
        return item?.id === action?.payload?.id;
      });
      console.log(isExist, "isExist");
      console.log(action.payload, "payload");
      if (isExist) {
        toast.info("Item Already Exist");
      } else {
        state.cartData = [...state.cartData, action.payload];
        toast.success("Item Added Successfully...");
      }
    },
    increaseQuantity: (state, action) => {
      const temp = state.cartData.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + action.payload.quantity,
          };
        }
        return item;
      });
      console.log(temp, "temp");
      state.cartData = temp;
    },
    decreaseQuantity: (state, action) => {
      const temp = state.cartData.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity:
              item.quantity === 1
                ? item.quantity
                : item.quantity - action.payload.quantity,
          };
        }
        return item;
      });
      console.log(temp, "temp");

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

export const {
  addToCart,
  deletefromCart,
  orderCheckedout,
  emptyCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
