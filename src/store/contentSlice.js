
import { createSlice } from "@reduxjs/toolkit";

const contentSlice=createSlice({
      name:'contentArray',
      initialState:'',
      reducers:{
        handleContentArray:(state,action)=>{
          return (action.payload);
        },
      }
})

export const contentAction=contentSlice.actions;
export default contentSlice;