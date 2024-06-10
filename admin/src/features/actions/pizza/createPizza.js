import { createAsyncThunk } from "@reduxjs/toolkit";


export const createPizza = createAsyncThunk("createPizza", async () => {
          const res = await fetch("");
          return res?.jsonI();
})