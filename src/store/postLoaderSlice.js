import { createSlice } from "@reduxjs/toolkit";

const postLoaderSlice=createSlice({
      name:'postLoader',
      initialState:true,
      reducers:{
        handlePostLoader:(state,action)=>{
          return (action.payload);
        }
      }
})

export const postLoaderAction=postLoaderSlice.actions;
export default postLoaderSlice;