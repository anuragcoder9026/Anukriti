import {configureStore} from '@reduxjs/toolkit';
import deleteSlice from './deleteSlice';

export const AnukritiStore=configureStore({
      reducer:{
        deleteModal:deleteSlice.reducer,
      }
})


export default AnukritiStore;