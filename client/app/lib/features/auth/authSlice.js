import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  isUserLoggedIn: false,
};

const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getcredentials: (state, action) => {
      return (state = action.payload);
    },
    addUserData: (state, action) => {
      const { data, isUserLoggedIn } = action.payload;
      state.userData = data;
      state.isUserLoggedIn = isUserLoggedIn;
    },
  },
});
export const { getcredentials, addUserData } = authslice.actions;
export default authslice.reducer;
