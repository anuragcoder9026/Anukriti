import { createSlice } from "@reduxjs/toolkit";

const afterSignSlice=createSlice({
      name:'afterSign',
      initialState:false,
      reducers:{
        handleAfterSign:(state,action)=>{
          return (action.payload);
        }
      }
})

export const afterSignAction=afterSignSlice.actions;
export default afterSignSlice;