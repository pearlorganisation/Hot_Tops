import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import pizzaReducer from "./slice/pizza/pizzaSlice";
import sidesCategory from "./slice/sides/categorySides";
import sidesFilter from "./slice/sides/filterSides"
import sides from "./slice/sides/sides";
import dessertCategory from "./slice/dessert/categoryDessert";
import dessertFilter from "./slice/dessert/filterDessert"
import dessert from "./slice/dessert/dessert";
import drink from "./slice/drink/drink";
import dip from "./slice/dip/dip";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  sidesCategory,
  sidesFilter,
  sides,
  dessertCategory,
  dessertFilter,
  dessert,
  drink,
  dip
  
  });

  

 // Redux-persist configuration
 const persistConfig = {
  key: "HotHouseAdminPanel",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${import.meta.env.VITE_REACT_APP_REDUX_PERSIST_SECRET_KEY}`,
      onError: (err) => {
        // Handle encryption errors if any
      },
    }),
  ],
};

// Persisted root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create the Redux store
const store = configureStore({
    reducer: persistedReducer,
    devTools: import.meta.env.VITE_REACT_APP_WORKING_ENVIRONMENT === "development",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  export default store;
