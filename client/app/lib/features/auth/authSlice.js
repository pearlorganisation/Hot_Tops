import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  isUserLoggedIn: false,
};
// Function to load user data from localStorage
const loadUserData = () => {
  if (typeof window !== "undefined") {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedData = JSON.parse(userData);
      return {
        userData: parsedData.userData,
        isUserLoggedIn: parsedData.isUserLoggedIn,
      };
    }
  }
  return initialState;
};

const authslice = createSlice({
  name: "auth",
  initialState: loadUserData(),
  reducers: {
    getcredentials: (state, action) => {
      return (state = action.payload);
    },
    addUserData: (state, action) => {
      const data = action.payload;
      console.log(data);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userData: data?.data,
          isUserLoggedIn: data?.isUserLoggedIn,
        })
      );
      state.userData = data?.data;
      state.isUserLoggedIn = data?.isUserLoggedIn;
    },
    userLogout: (state, action) => {
      localStorage.removeItem("userData");
      state.isUserLoggedIn = false;
      state.userData = null;
    },
  },
});
export const { getcredentials, addUserData, userLogout } = authslice.actions;
export default authslice.reducer;
