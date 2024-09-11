import { createSlice } from "@reduxjs/toolkit";
import { createDeal, deleteDeal, getDeal, updateDeal } from "../../actions/deals/deal";
import { toast } from "sonner";
import { redirect } from "react-router-dom";

const initialState = {
    isLoading: false,
    isSuccess: false,
    dealData: [],
    errorMessage: "",
};



export const dealsSlice =  createSlice({

    name:"dealsSlice",
    initialState,
    reducers:{
      clearIsSuccess: (state)=>{
        state.isSuccess= false
      }
    },
    extraReducers : (builder) => {

        builder
        .addCase(createDeal.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.errorMessage = "";
          })
        .addCase(createDeal.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.errorMessage = "";
            state.dealData = action.payload;
            console.log(state.dealData)
            toast.success("DealData Created Successfully...",{
              position:"top-center"
            });
            
        })
        .addCase(createDeal.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = action.payload;
            toast.error(action?.payload || "Something went wrong",{
              position:"top-center"
            })
        })

        .addCase(getDeal.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.errorMessage = "";
          })
        .addCase(getDeal.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.errorMessage = "";
            state.dealData = action.payload;
            console.log(state.dealData)
            toast.success("DealData Added Successfully...",{
              position:"top-center"
            });
            state.isSuccess = false;

        })
        .addCase(getDeal.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = action.payload;
            toast.error(action?.payload || "Something went wrong",{
              position:"top-center"
            })
            
        })

        .addCase(updateDeal.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.errorMessage = "";
          })
        .addCase(updateDeal.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.errorMessage = "";
            // state.dealData = action.payload.data;
            console.log(state.dealData)
            toast.success("DealData Fetched Successfully...",{
              position:"top-center"
            });
            state.isSuccess = false;

        })
        .addCase(updateDeal.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = action.payload;
            toast.error(action?.payload || "Something went wrong",{
              position:"top-center"
            })
        })

        .addCase(deleteDeal.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.errorMessage = "";
          })
        .addCase(deleteDeal.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.errorMessage = "";
            state.dealData = action.payload;
            console.log(state.dealData)
            toast.success("DealData Deleted Successfully...",{
              position:"top-center"
            });
            state.isSuccess = false;

        })
        .addCase(deleteDeal.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = action.payload;
            toast.error(action?.payload || "Something went wrong",{
              position:"top-center"
            })
            state.isSuccess = false;

        })
    
        
    }
    

})



export default dealsSlice.reducer;
export const {clearIsSuccess} = dealsSlice.actions


