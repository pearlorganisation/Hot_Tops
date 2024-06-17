import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPizza = createAsyncThunk("createPizza", async (data) => {
          const res = await fetch("http://localhost:9898/api/v1/pizza", {
                    method: 'POST',
                    body:data
  });
  return res?.json();
});
