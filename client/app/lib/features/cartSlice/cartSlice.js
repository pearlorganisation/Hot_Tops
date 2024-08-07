import { toast } from "sonner";

const { createSlice, current } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
    allToppings: {},
    defaultPrice: 0,
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

    setDefaultPrice: (state, action) => {
      console.log(action.payload, "action.payload");
      const { arr, customizationData } = action.payload;
      console.log(customizationData, "customiza");
      // Filter the items based on the sauce names and calculate the default price
      const {
        sauceName,
        cheeseName,
        vegetarianToppingsName,
        meatToppingsName,
      } = customizationData;
      const temp = [
        sauceName,
        cheeseName,
        vegetarianToppingsName,
        meatToppingsName,
      ].flat();
      const defaultPrice = arr
        .filter((item) => temp.includes(item.name))
        .reduce((acc, nxt) => {
          return acc + (nxt.price[0]?.singlePrice || 0); // Ensure singlePrice exists
        }, 0);

      console.log(defaultPrice, "defaultPrice");

      // Update the state with the calculated default price
      state.defaultPrice = defaultPrice.toFixed(2);
    },

    setToppings: (state, action) => {
      const temp = {
        ...current(state.allToppings),
        ...action.payload,
      };

      const { sauce, cheese, veg, meat, base, price } = temp;
      const extraPrice =
        [sauce, cheese, veg, meat].flat().reduce((acc, cur) => {
          return acc + cur?.price;
        }, 0) + base?.price[0]?.price || 0;
      const prices = {
        ...temp,
        extraPrice: Math.max(0, extraPrice).toFixed(2),
        totalPrice: Math.max(
          state.allToppings.price,
          extraPrice + price - Number(state.defaultPrice)
        ).toFixed(2),
      };
      state.allToppings = prices;
    },
    addDealsData:(state,action) =>
    {
      const temp = {
        ...current(state.allToppings),
        ...action.payload,
      };

      const { sauce, cheese, veg, meat, base, price } = temp;
      const extraPrice =
        [sauce, cheese, veg, meat].flat().reduce((acc, cur) => {
          return acc + cur?.price;
        }, 0) + base?.price[0]?.price || 0;
      const prices = {
        ...temp,
        extraPrice: extraPrice,
        totalPrice: extraPrice + price,
      };
      state.dealsToppingData.push(prices);
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
  setToppings,
  setDefaultPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
