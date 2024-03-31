
import { createSlice } from "@reduxjs/toolkit";

const currentContentSlice=createSlice({
      name:'currentContent',
      initialState:0,
      reducers:{
        handleCurrentContent:(state,action)=>{
          return (action.payload);
        }
      }
})

export const currentContentAction=currentContentSlice.actions;
export default currentContentSlice;