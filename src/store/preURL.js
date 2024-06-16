import { createSlice } from "@reduxjs/toolkit";

const preURLSlice=createSlice({
    name:'preURL',
    initialState:'http://localhost:5173/Anukriti',
    reducers:{
      handlePreURL:(state,action)=>{
        return (action.payload);
      }
    }
})

export const preURLAction=preURLSlice.actions;
export default preURLSlice;