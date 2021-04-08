import React, { useRef, useState  } from 'react';
import cl from './Search.module.css';
import SearchResults from './SearchResults/SearchResults';


function Search() {

  const [currentResultObj, setCurrentResultObj] = useState();

  const searchInput = useRef();

  const onChangeInput = (evt) => {
    const inputValue = searchInput.current.value;
    // console.log(inputValue);

    fetch(`http://www.omdbapi.com/?s=${inputValue}&apikey=46e3b29b`)
    .then(response => response.json() )
    .then(response => {   
      if (response.Response === 'True') {
        console.log(response.Search[0].imdbID);
        let searchFilmId = response.Search[0].imdbID;
        return searchFilmId;
      } else {
        setCurrentResultObj();
      }   
    })
    .then((searchFilmId) => {
      if (searchFilmId) {       
        fetch(`http://www.omdbapi.com/?i=${searchFilmId}&apikey=46e3b29b`)
        .then(response => response.json() )
        .then (currentResult => {
          setCurrentResultObj(currentResult);
        })
      }
    })

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
            {currentResultObj &&
              <SearchResults currentResult = {currentResultObj} />
            }
            
           
        </div> 
    </div>
       
    </>
  );
  
}

export default Search;
