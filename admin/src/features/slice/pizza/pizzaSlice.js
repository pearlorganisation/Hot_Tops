import { createSlice } from "@reduxjs/toolkit";
import { createPizza } from "../../actions/pizza/createPizza";
import { getPizzasFilter } from "../../actions/pizza/getPizzasFilter";
import { getPizzasCategories } from "../../actions/pizza/getPizzasCategories";
import { getPizzaCustomization } from "../../actions/pizza/getPizzaCustomization";
import { putPizzaCustomization } from "../../actions/pizza/postCustomization/postPizzaCustomization";
import { getBasePizza } from "../../actions/pizza/getCustomization/getBasePizza";
import { postBasePizza } from "../../actions/pizza/postCustomization/postBasePizza";
import { getSizePizza } from "../../actions/pizza/getCustomization/getSlicePizza";
import { getSaucePizza } from "../../actions/pizza/getCustomization/getSaucePizza";
import { getCheesePizza } from "../../actions/pizza/getCustomization/getCheesePizza";
import { getSeaFoodTopping } from "../../actions/pizza/getCustomization/getSeaFoodTopping";
import { getMeatTopping } from "../../actions/pizza/getCustomization/getMeatTopping";
import { getVegetarianTopping } from "../../actions/pizza/getCustomization/getVegetarianTopping";
import { postCheesePizza } from "../../actions/pizza/postCustomization/postCheesePizza";
import { postSizePizza } from "../../actions/pizza/postCustomization/postSizePizza";
import { postSaucePizza } from "../../actions/pizza/postCustomization/postSaucePizza";
import { postVegTopping } from "../../actions/pizza/postCustomization/postVegTopping";
import { postMeatTopping } from "../../actions/pizza/postCustomization/postMeatTopping";
import { deleteBasePizza } from "../../actions/pizza/deleteCustomization/deleteBasePizza";
import { deleteSizePizza } from "../../actions/pizza/deleteCustomization/deleteSizePizza";
import { deleteCheesePizza } from "../../actions/pizza/deleteCustomization/deleteCheesePizza";
import { deleteSaucePizza } from "../../actions/pizza/deleteCustomization/deleteSaucePizza";
import { deleteVegTopping } from "../../actions/pizza/deleteCustomization/deleteVegTopping";
import { deleteMeatTopping } from "../../actions/pizza/deleteCustomization/deleteMeatTopping";
import { updateBasePizza } from "../../actions/pizza/updateCustomization/updateBasePizza";
import { updateSizePizza } from "../../actions/pizza/updateCustomization/updateSizePizza";
import { updateCheesePizza } from "../../actions/pizza/updateCustomization/updateCheesePizza";
import { updateSaucePizza } from "../../actions/pizza/updateCustomization/updateSaucePizza";
import { updateVegTopping } from "../../actions/pizza/updateCustomization/updateVegTopping";
import { updateMeatTopping } from "../../actions/pizza/updateCustomization/updateMeatTopping";

const initialState = {
  isLoading: false,
  PizzaData: [],
  isError: false,
  pizzaFilter: [],
  pizzaCategory: [],
  pizzaCustomization: [],
  base: [],
  size: [],
  vegetarianToppings: [],
  sauce: [],
  cheese: [],
  seaTopping: [],
  meatToppings: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // create pizza api action and state
    builder.addCase(createPizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.PizzaData = action.payload;
    });
    builder.addCase(createPizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // pizza filter api action and state
    builder.addCase(getPizzasFilter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPizzasFilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizzaFilter = action.payload;
    });
    builder.addCase(getPizzasFilter.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // category api action and state
    builder.addCase(getPizzasCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPizzasCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizzaCategory = action.payload;
    });
    builder.addCase(getPizzasCategories.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // customization api action and state
    builder.addCase(getPizzaCustomization.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPizzaCustomization.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizzaCustomization = action.payload;
    });
    builder.addCase(getPizzaCustomization.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // customization put api action and state
    builder.addCase(putPizzaCustomization.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(putPizzaCustomization.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizzaCustomization = action.payload;
    });
    builder.addCase(putPizzaCustomization.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

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
      state.base = action.payload.updatedData; // Assuming the response has the new base pizza data
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
      state.base = action.payload.updatedData;
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
      state.base = action.payload.data;
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
      state.size=action.payload.updatedData; // Assuming the response has the new base pizza data
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
      state.size = action.payload.updatedData;
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
      state.size = action.payload.data;
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
      state.cheese = action.payload.updatedData; // Assuming the response has the new base pizza data
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
      const updatedCheese = action.payload.data;
      state.cheese = action.payload.updatedData;
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
      state.cheese = action.payload.data;
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
      state.sauce = action.payload.updatedData; // Assuming the response has the new base pizza data
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
      state.sauce = action.payload.updatedData;
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
      state.sauce = action.payload.data;
    });
    builder.addCase(deleteSaucePizza.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // SeaTopping get api action and state
    builder.addCase(getSeaFoodTopping.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSeaFoodTopping.fulfilled, (state, action) => {
      state.isLoading = false;
      state.seaTopping = action.payload.data;
    });
    builder.addCase(getSeaFoodTopping.rejected, (state) => {
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
      state.vegetarianToppings = action.payload.updatedData; // Assuming the response has the new base pizza data
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
      state.vegetarianToppings = action.payload.updatedData;
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
      state.vegetarianToppings = action.payload.data;
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
      state.meatToppings =  action.payload.updatedData; // Assuming the response has the new base pizza data
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
      state.meatToppings = action.payload.updatedData;
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
      state.meatToppings = action.payload.data;
    });
    builder.addCase(deleteMeatTopping.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // ----------------------------------------------------------------------------------------------------------------
  },
});

export default pizzaSlice.reducer;
