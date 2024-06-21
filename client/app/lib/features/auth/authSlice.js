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
      const data = action.payload;
      console.log(data);
      state.userData = data?.data;
      state.isUserLoggedIn = data?.isUserLoggedIn;
    },
  },
});
export const { getcredentials, addUserData } = authslice.actions;
export default authslice.reducer;
