import {configureStore} from '@reduxjs/toolkit';
import deleteSlice from './deleteSlice';
import contentSlice from './contentSlice';
import currentContentSlice from './currentContentSlice';
import afterSignSlice from './aftersignSlice';
import userDataSlice from './userdataSlice';
import postLoaderSlice from './postLoaderSlice';
import preURLSlice from './preURL';
export const AnukritiStore=configureStore({
      reducer:{
        deleteModal:deleteSlice.reducer,
        contentArray:contentSlice.reducer,
        currentContent:currentContentSlice.reducer,
        afterSign:afterSignSlice.reducer,
        userData:userDataSlice.reducer,
        postLoader:postLoaderSlice.reducer,
        preURL:preURLSlice.reducer,
      }
})


export default AnukritiStore;