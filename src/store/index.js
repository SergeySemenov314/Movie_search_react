import {configureStore} from '@reduxjs/toolkit';
import searchResultsReducer from './searchResultsSlice';
// import cartReducer from './cartSlice';

export default configureStore({
    reducer:{
        searchResults: searchResultsReducer,
        // cart: cartReducer,

    }
})