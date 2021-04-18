import {createSlice} from '@reduxjs/toolkit';
import env from '../env.json';

export const fetchSearchResults = (searchValue) => {
   
    return(dispatch) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${env.apiKeyTMDB}&query=${searchValue}`)
            .then(response => response.json() )
            .then(response => {   
                if (response.total_results > 0 ) {
                    let idTMDB = response.results[0].id;
                    dispatch(setIdTMDB(idTMDB)); 
                    return idTMDB; 
                } else {
                    dispatch(setSearchResults({}));
                    dispatch(setAdditionalInfo({}));
                }
                            
            })
            .then((idTMDB) => {
                if (idTMDB) {       
                    fetch(`https://api.themoviedb.org/3/movie/${idTMDB}?api_key=${env.apiKeyTMDB}`)
                    .then(response => response.json() )
                    .then (currentResult => {  
                        let idImdb = currentResult.imdb_id;
                        dispatch(setSearchResults(currentResult));
                        dispatch(setIdImdb(idImdb));
                        dispatch(fetchAdditionalInfo(idImdb));      
                    }) 
                }
            }) 
    } 
}

export const fetchAdditionalInfo = (idImdb) => {         
    return(dispatch) => {
        fetch(`http://www.omdbapi.com/?apikey=${env.apiKeyOMDb}&i=${idImdb}`)
        .then(response => response.json() )
        .then (movieObjOMDb => {  
            let imdbRating = movieObjOMDb.imdbRating;
            let type = movieObjOMDb.Type;
            let awards = movieObjOMDb.Awards;
            let year = movieObjOMDb.Year;

            let additionalInfo = {
                imdbRating: imdbRating,
                type: type,
                awards: awards,
                year: year
            }
            dispatch(setAdditionalInfo(additionalInfo));
            
        })
    }
}

export const fetchSimilarFilms = (idTMDB) => {         
    return(dispatch) => {
        fetch(`https://api.themoviedb.org/3/movie/${idTMDB}/similar?api_key=${env.apiKeyTMDB}`)
        .then(response => response.json() )
        .then (similarArr => {  
            let reducedSimilarArr = similarArr.results.slice(0, 4);
            dispatch(setSimilarFilmsArr(reducedSimilarArr));
        })
    }
}

export const searchResultsSlice = createSlice({
    name: 'searchResults',
    initialState:{
        idTMDB: 0,
        idImdb: '',
        searchResults: {},
        additionalInfo: {},
        similarFilmsArr:[]
    },
    reducers: {
        setSearchResults: (state, searchValue) =>{   
            state.searchResults = searchValue.payload;
        },
        setIdTMDB: (state, idTMDB) =>{   
            state.idTMDB = idTMDB.payload;
        },
        setIdImdb: (state, idImdb) =>{   
            state.idImdb = idImdb.payload;
        },
        setAdditionalInfo: (state, additionalInfo) =>{   
            state.additionalInfo = additionalInfo.payload;
        },
        setSimilarFilmsArr: (state, similarFilmsArr) =>{   
            state.similarFilmsArr = similarFilmsArr.payload;
        }
         
    },

});

export const {setSearchResults, setIdTMDB, setIdImdb, setAdditionalInfo, setSimilarFilmsArr} = searchResultsSlice.actions;
export const selectSearchResults = state => state.searchResults;
export const selectSimilarFilms = state => state.searchResults.similarFilmsArr;
export default searchResultsSlice.reducer;  