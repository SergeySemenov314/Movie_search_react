import {createSlice} from '@reduxjs/toolkit';

export const fetchSearchResults = (inputValue) => {

           
    return(dispatch) => {
        

        fetch(`http://www.omdbapi.com/?s=${inputValue}&apikey=46e3b29b`)
            .then(response => response.json() )
            .then(response => {   
                if (response.Response === 'True') {
                    console.log(response.Search[0].imdbID);
                    let searchFilmId = response.Search[0].imdbID;
                    return searchFilmId;
                } else {
                    dispatch(setSearchResults());
                }   
            })
            .then((searchFilmId) => {
                if (searchFilmId) {       
                    fetch(`http://www.omdbapi.com/?i=${searchFilmId}&apikey=46e3b29b`)
                    .then(response => response.json() )
                    .then (currentResult => {
                
                        dispatch(setSearchResults(currentResult));
                    })
                }
            })
    }
    
    
}

export const searchResultsSlice = createSlice({
    name: 'searchResults',
    initialState:{
        // searchResults: {
        //     
        // }
    },
    reducers: {
        setSearchResults: (state, searchValue) =>{   
            state.searchResults = searchValue.payload;
        }
         
    },

});

export const {setSearchResults} = searchResultsSlice.actions;
export const selectSearchResults = state => state.searchResults;
export default searchResultsSlice.reducer;  