import { toast } from "sonner";

const { createSlice, current } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
    price: {
      saucePrice: 0,
      cheesePrice: 0,
      vegetarianPrice: 0,
      meatPrice: 0,
      totalPrice: 0,
    },
    isOrderCheckout: false,
  },

  reducers: {
    addToCart: (state, action) => {
      const isExist = state.cartData?.some((item) => {
        return item?.id === action?.payload?.id;
      });
      // console.log(isExist, "isExist");

      if (isExist) {
        const temp = state.cartData.map((item) => {
          if (item.id === action.payload.id) {
            const updatedData = {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
            console.log(updatedData, "updatedData");
            return {
              ...updatedData,
              totalSum: (updatedData?.quantity * item?.price).toFixed(2),
            };
          }
          return item;
        });
        state.cartData = temp;
        toast.success("Added...");
      } else {
        state.cartData = [...state.cartData, action.payload];
        toast.success("Item Added Successfully...");
      }
    },
    increaseQuantity: (state, action) => {
      const temp = state.cartData.map((item) => {
        if (item.id === action.payload.id) {
          const updatedData = {
            ...item,
            quantity: item.quantity + action.payload.quantity,
          };
          console.log(updatedData, "updatedData");
          return {
            ...updatedData,
            totalSum: (updatedData?.quantity * item?.price).toFixed(2),
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
          const updatedData = {
            ...item,
            quantity:
              item.quantity === 1
                ? item.quantity
                : item.quantity - action.payload.quantity,
          };
          return {
            ...updatedData,
            totalSum: (updatedData?.quantity * item?.price).toFixed(2),
          };
        }
        return item;
      });
      console.log(temp, "temp");

      state.cartData = temp;
    },
    setPrice: (state, action) => {
      console.log("price:", { ...action.payload });
      console.log(current(state?.price));
      const { saucePrice, cheesePrice, vegetarianPrice, meatPrice } = {
        ...current(state.price),
        ...action.payload,
      };

      console.log(
        saucePrice,
        cheesePrice,
        vegetarianPrice,
        meatPrice,
        "setPrice"
      );

      const totalSum = saucePrice + cheesePrice + vegetarianPrice + meatPrice;
      state.price = {
        saucePrice,
        cheesePrice,
        vegetarianPrice,
        meatPrice,
        totalPrice: totalSum,
      };
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
  setPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
