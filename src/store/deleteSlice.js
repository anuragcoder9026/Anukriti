
import { createSlice } from "@reduxjs/toolkit";

const deleteSlice=createSlice({
      name:'deleteModal',
      initialState:false,
      reducers:{
        handlePopup:(state,action)=>{
          return (action.payload);
        }
      }
})

export const deleteAction=deleteSlice.actions;
export default deleteSlice;