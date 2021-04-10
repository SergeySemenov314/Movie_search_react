import {createSlice} from '@reduxjs/toolkit';

export const searchResultsSlice = createSlice({
    name: 'searchResults',
    initialState:{
        searchResults: {
            // firstResult:{}
        }
    },
    reducers: {
        getSearchResults: (state, searchValue) =>{   
            state.searchResults = searchValue.payload;
        }
         
    }

});

export const {getSearchResults} = searchResultsSlice.actions;
export const selectSearchResults = state => state.searchResults;
export default searchResultsSlice.reducer;  