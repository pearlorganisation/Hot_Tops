import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getcredentials: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { getcredentials } = authslice.actions;
export default authslice.reducer;
