import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/axiosInterceptor";


export const getAllOrders = createAsyncThunk("getDrink",    
  async (payload, { rejectWithValue }) => {
  try {
    const {data} = await instance.get(`/order`, {
      withCredentials: true,
    });
    return data;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);


// //deleteDrink api
// export const deleteDrink = createAsyncThunk(
//   'deleteDrink',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await instance.delete(
//         `/drinks/${id}`,
        
//         { withCredentials: true }
//       );
//       return response;
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   }
// );
