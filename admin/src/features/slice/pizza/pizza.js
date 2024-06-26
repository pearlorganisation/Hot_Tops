import { createSlice } from "@reduxjs/toolkit";


// import { postBasePizza } from "../../actions/pizza/postCustomization/postBasePizza";
// import { postCheesePizza } from "../../actions/pizza/postCustomization/postCheesePizza";
// import { postSizePizza } from "../../actions/pizza/postCustomization/postSizePizza";
// import { postSaucePizza } from "../../actions/pizza/postCustomization/postSaucePizza";
// import { postVegTopping } from "../../actions/pizza/postCustomization/postVegTopping";
// import { postMeatTopping } from "../../actions/pizza/postCustomization/postMeatTopping";


import { postBasePizza , postCheesePizza , postSizePizza , postVegTopping , postMeatTopping, postSaucePizza } from "../../actions/pizza/postCustomization";


import { updateBasePizza ,updateSizePizza, updateCheesePizza  ,updateSaucePizza  ,updateVegTopping ,updateMeatTopping} from "../../actions/pizza/patchCustomization";
import { getBasePizza, getCheesePizza, getMeatTopping, getSaucePizza, getSizePizza, getVegetarianTopping } from "../../actions/pizza/getCustomization";
import { deleteBasePizza , deleteSizePizza , deleteCheesePizza , deleteSaucePizza , deleteVegTopping ,  deleteMeatTopping } from "../../actions/pizza/deleteCustomization";


const initialState = {
  isSuccess:false,
  isLoading: false,
  isError: false,
  base: [],
  size: [],
  vegetarianToppings: [],
  sauce: [],
  cheese: [],
  meatToppings: [],
};

const pizza = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    resetStatus: (state, action) => {
      state.isSuccess = action.payload;
    },
  },
  extraReducers: (builder) => {




    // ---------------------------------------Customization api's  bases,size,etc---------------------
    // bases get api action and state
    builder.addCase(getBasePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBasePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.base = action.payload.data;

    });
    builder.addCase(getBasePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // bases post api action and state
    builder.addCase(postBasePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postBasePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      
      state.isSuccess = true;
      
      
       // Assuming the response has the new base pizza data
    });
    builder.addCase(postBasePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      
    });

    // updateBasePizza cases
    builder.addCase(updateBasePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateBasePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(updateBasePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // deleteBasePizza cases
    builder.addCase(deleteBasePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteBasePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(deleteBasePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Size get api action and state
    builder.addCase(getSizePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSizePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.size = action.payload.data;
    });
    builder.addCase(getSizePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // size post api action and state
    builder.addCase(postSizePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postSizePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true; 
    });
    builder.addCase(postSizePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // updateSizePizza cases
    builder.addCase(updateSizePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateSizePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(updateSizePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // deleteSizePizza cases
    builder.addCase(deleteSizePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteSizePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(deleteSizePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // cheese get api action and state
    builder.addCase(getCheesePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCheesePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cheese = action.payload.data;
    });
    builder.addCase(getCheesePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // cheese post api action and state
    builder.addCase(postCheesePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postCheesePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(postCheesePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // updateCheesePizza cases
    builder.addCase(updateCheesePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateCheesePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;

    });
    builder.addCase(updateCheesePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // deleteCheesePizza cases
    builder.addCase(deleteCheesePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCheesePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;

    });
    builder.addCase(deleteCheesePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Sauce get api action and state
    builder.addCase(getSaucePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSaucePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sauce = action.payload.data;
    });
    builder.addCase(getSaucePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Sauce post api action and state
    builder.addCase(postSaucePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postSaucePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(postSaucePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // updateSaucePizza cases
    builder.addCase(updateSaucePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateSaucePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;

    });
    builder.addCase(updateSaucePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // deleteSaucePizza cases
    builder.addCase(deleteSaucePizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteSaucePizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;

    });
    builder.addCase(deleteSaucePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });


    // Vegetarian Topping get api action and state
    builder.addCase(getVegetarianTopping.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getVegetarianTopping.fulfilled, (state, action) => {
      state.isLoading = false;
      state.vegetarianToppings = action.payload.data;

    });
    builder.addCase(getVegetarianTopping.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Veg post api action and state
    builder.addCase(postVegTopping.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postVegTopping.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(postVegTopping.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // updateVegPizza cases
    builder.addCase(updateVegTopping.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateVegTopping.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;

    });
    builder.addCase(updateVegTopping.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // delete veg topping cases
    builder.addCase(deleteVegTopping.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteVegTopping.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;

    });
    builder.addCase(deleteVegTopping.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // MeatTopping get api action and state
    builder.addCase(getMeatTopping.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMeatTopping.fulfilled, (state, action) => {
      state.isLoading = false;
      state.meatToppings = action.payload.data;
    });
    builder.addCase(getMeatTopping.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // MeatTopping post api action and state
    builder.addCase(postMeatTopping.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postMeatTopping.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(postMeatTopping.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // updateMeatTopping cases
    builder.addCase(updateMeatTopping.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateMeatTopping.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;

    });
    builder.addCase(updateMeatTopping.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // delete meat topping cases
    builder.addCase(deleteMeatTopping.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteMeatTopping.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      
    });
    builder.addCase(deleteMeatTopping.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // ----------------------------------------------------------------------------------------------------------------
  },
});

export const {resetStatus} = pizza.actions;
export default pizza.reducer;
