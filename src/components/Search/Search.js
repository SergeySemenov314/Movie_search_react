import React, { useRef } from 'react';
import cl from './Search.module.css';
import SearchResults from './SearchResults/SearchResults';


import {useSelector, useDispatch} from 'react-redux';
import {selectSearchResults, fetchSearchResults} from '../../store/searchResultsSlice';



function Search() {
  const searchResults = useSelector(selectSearchResults);
  const dispatch = useDispatch();
  const searchInput = useRef();

  const onChangeInput = (evt) => {
    const inputValue = searchInput.current.value;
    dispatch(fetchSearchResults(inputValue));
  }

  const hasContent = (obj) => {
    for (let key in obj) {
      return true;
    }
    return false;
  }

  return (
    <>
    <div className={cl.bg}>
        {/* <iframe className = {cl.videoBg} src="https://www.youtube.com/embed/gA0nQyDZR4A?controls=0&showinfo=0&rel=0&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>    */}
        <div className='container'>
            <div className={cl.search}>
                <h1 className={cl.heading}>Unlimited movies, TV shows, and more.</h1>
                <p className={cl.subHeading}>Watch anywhere. Cancel anytime.</p> 
                <form action="" className={cl.form}>
                    <input type="text" className={cl.input} placeholder = 'Type here smth...' ref = {searchInput}  onChange = {onChangeInput} />
                    <button className={cl.formButton}>Search</button>
                </form>              
            </div>
            {hasContent(searchResults.searchResults) &&
              <SearchResults currentResult = {searchResults} />
            }
            
           
        </div> 
    </div>
       
    </>
  );
  
}

export default Search;
