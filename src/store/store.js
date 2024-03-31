import {configureStore} from '@reduxjs/toolkit';
import deleteSlice from './deleteSlice';
import contentSlice from './contentSlice';
import currentContentSlice from './currentContentSlice';
export const AnukritiStore=configureStore({
      reducer:{
        deleteModal:deleteSlice.reducer,
        contentArray:contentSlice.reducer,
        currentContent:currentContentSlice.reducer,
      }
})


export default AnukritiStore;