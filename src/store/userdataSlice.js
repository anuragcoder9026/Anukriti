import { createSlice } from "@reduxjs/toolkit";

const userDataSlice=createSlice({
      name:'userData',
      initialState:null,
      reducers:{
        handleUserData:(state,action)=>{
            // console.log("payload:",action.payload);
            return action.payload;
        }
      }
})

export const userDataAction=userDataSlice.actions;
export default userDataSlice;