import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import searchResultsReducer from './searchResultsSlice';

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});


export default configureStore({
    reducer:{
        searchResults: searchResultsReducer,
        middleware: middleware,
        devTools: true,
     
    }
})